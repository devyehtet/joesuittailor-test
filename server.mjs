import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist");
const preferredPort = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const maxPortAttempts = process.env.PORT ? 1 : 10;
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

async function handleRequest(request, response) {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
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
