import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist");
const leadStorePath = process.env.LEADS_FILE || join(process.cwd(), "data", "leads.json");
const preferredPort = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const maxPortAttempts = process.env.PORT ? 1 : 10;
const maxBodySize = 1024 * 1024;
const allowedLeadTypes = new Set(["appointment", "quote", "general"]);
const allowedStatuses = new Set(["new", "contacted", "booked", "closed"]);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

let writeQueue = Promise.resolve();

function jsonHeaders(extra = {}) {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...extra
  };
}

function sendJson(response, status, payload) {
  response.writeHead(status, jsonHeaders());
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBodySize) {
        const error = new Error("Request body is too large");
        error.statusCode = 413;
        reject(error);
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });

    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

async function readJsonBody(request) {
  const raw = await readBody(request);
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    const error = new Error("Invalid JSON payload");
    error.statusCode = 400;
    throw error;
  }
}

async function ensureLeadStore() {
  await mkdir(dirname(leadStorePath), { recursive: true });
  try {
    await readFile(leadStorePath, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeFile(leadStorePath, "[]\n", "utf8");
  }
}

async function readLeads() {
  await ensureLeadStore();
  const raw = await readFile(leadStorePath, "utf8");
  if (!raw.trim()) return [];

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : [];
}

async function writeLeads(leads) {
  await mkdir(dirname(leadStorePath), { recursive: true });
  await writeFile(leadStorePath, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}

function withLeadStore(mutator) {
  const run = writeQueue.then(async () => {
    const leads = await readLeads();
    const result = await mutator(leads);
    await writeLeads(leads);
    return result;
  });

  writeQueue = run.catch(() => {});
  return run;
}

function text(value, max = 500) {
  return String(value || "").trim().slice(0, max);
}

function normalizeLead(payload, request) {
  const leadType = allowedLeadTypes.has(payload.lead_type) ? payload.lead_type : "general";
  const lead = {
    id: randomUUID(),
    created_at: new Date().toISOString(),
    status: "new",
    lead_type: leadType,
    name: text(payload.name, 120),
    email: text(payload.email, 180),
    phone: text(payload.phone, 80),
    service: text(payload.service, 160),
    timeline: text(payload.timeline, 160),
    budget: text(payload.budget, 160),
    message: text(payload.message, 1600),
    preferred_date: text(payload.preferred_date, 40),
    preferred_time: text(payload.preferred_time, 40),
    lead_source: text(payload.lead_source, 220),
    page_path: text(payload.page_path, 220),
    ad_group: text(payload.ad_group, 140),
    utm: typeof payload.utm === "object" && payload.utm ? payload.utm : {},
    referrer: text(payload.referrer, 360),
    user_agent: text(request.headers["user-agent"], 360),
    notes: ""
  };

  const missing = ["name", "email", "phone", "service"].filter((field) => !lead[field]);
  if (leadType === "appointment" && (!lead.preferred_date || !lead.preferred_time)) {
    missing.push("preferred_date", "preferred_time");
  }

  if (missing.length) {
    const error = new Error(`Missing required field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`);
    error.statusCode = 400;
    throw error;
  }

  return lead;
}

function leadSummary(leads) {
  const summary = {
    total: leads.length,
    appointment: 0,
    quote: 0,
    general: 0,
    new: 0,
    contacted: 0,
    booked: 0,
    closed: 0
  };

  leads.forEach((lead) => {
    if (summary[lead.lead_type] !== undefined) summary[lead.lead_type] += 1;
    if (summary[lead.status] !== undefined) summary[lead.status] += 1;
  });

  return summary;
}

function ensureAdminAccess(request, response) {
  const adminPin = process.env.ADMIN_PIN;
  if (!adminPin) return true;

  if (request.headers["x-admin-pin"] === adminPin) return true;

  sendJson(response, 401, { error: "Admin PIN is required" });
  return false;
}

async function handleApi(request, response, url) {
  if (request.method === "OPTIONS") {
    response.writeHead(204, jsonHeaders({
      "Access-Control-Allow-Headers": "Content-Type, X-Admin-Pin",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS"
    }));
    response.end();
    return;
  }

  if (url.pathname === "/api/leads" && request.method === "POST") {
    const payload = await readJsonBody(request);
    const lead = normalizeLead(payload, request);
    await withLeadStore((leads) => {
      leads.push(lead);
      return lead;
    });
    sendJson(response, 201, { lead });
    return;
  }

  if (url.pathname === "/api/leads" && request.method === "GET") {
    if (!ensureAdminAccess(request, response)) return;

    const leads = await readLeads();
    const type = url.searchParams.get("type");
    const status = url.searchParams.get("status");
    const filtered = leads
      .filter((lead) => !type || lead.lead_type === type)
      .filter((lead) => !status || lead.status === status)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    sendJson(response, 200, {
      leads: filtered,
      summary: leadSummary(leads),
      admin_pin_enabled: Boolean(process.env.ADMIN_PIN)
    });
    return;
  }

  const leadMatch = url.pathname.match(/^\/api\/leads\/([^/]+)$/);
  if (leadMatch && request.method === "PATCH") {
    if (!ensureAdminAccess(request, response)) return;

    const payload = await readJsonBody(request);
    const id = decodeURIComponent(leadMatch[1]);
    const updated = await withLeadStore((leads) => {
      const lead = leads.find((item) => item.id === id);
      if (!lead) return null;

      if (payload.status && allowedStatuses.has(payload.status)) lead.status = payload.status;
      if (payload.notes !== undefined) lead.notes = text(payload.notes, 1600);
      lead.updated_at = new Date().toISOString();
      return lead;
    });

    if (!updated) {
      sendJson(response, 404, { error: "Lead not found" });
      return;
    }

    sendJson(response, 200, { lead: updated });
    return;
  }

  sendJson(response, 404, { error: "API route not found" });
}

async function handleRequest(request, response) {
  try {
    const url = new URL(request.url, `http://${host}:${preferredPort}`);

    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }

    const pathname = decodeURIComponent(url.pathname);
    const cleanPath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
    let filePath = join(root, cleanPath);

    try {
      const fileStat = await stat(filePath);
      if (fileStat.isDirectory()) filePath = join(filePath, "index.html");
    } catch {
      filePath = join(root, "index.html");
    }

    const data = await readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[extname(filePath).toLowerCase()] || "application/octet-stream" });
    response.end(data);
  } catch (error) {
    if (request.url && request.url.startsWith("/api/")) {
      sendJson(response, error.statusCode || 500, { error: error.message || "API request failed" });
      return;
    }

    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Unable to serve the website: ${error.message}`);
  }
}

function listen(port, attempt = 1) {
  const server = createServer(handleRequest);

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && attempt < maxPortAttempts) {
      const nextPort = port + 1;
      console.log(`Port ${port} is already in use. Trying ${nextPort}...`);
      listen(nextPort, attempt + 1);
      return;
    }

    if (error.code === "EADDRINUSE") {
      console.error(`Port ${port} is already in use. Stop the other server or run with PORT=${port + 1}.`);
    } else if (error.code === "EACCES" || error.code === "EPERM") {
      console.error(`Unable to start the server on ${host}:${port}. Permission was denied.`);
    } else {
      console.error(`Unable to start the server: ${error.message}`);
    }

    process.exit(1);
  });

  server.listen(port, host, () => {
    console.log(`Joe Suit Tailor is running at http://${host}:${port}`);
  });
}

listen(preferredPort);
