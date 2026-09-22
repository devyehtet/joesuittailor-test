const A = "/assets/";
const app = document.querySelector("#app");

const shop = {
  name: "Joe Suit Tailor",
  phone: "+66 81 554 4451",
  phoneHref: "tel:+66815544451",
  whatsapp: "https://wa.me/66815544451",
  address: "Platinum Fashion Mall, 3rd Floor, Zone 2, Soi Nathan-10, Room 908, Bangkok",
  hours: "Open daily 10am-8pm"
};

const assets = {
  hero: "hero-main-B6u4IPDm.jpg",
  tailor: "craftsmanship-D0trqJjg.jpg",
  atelier: "boutique-atelier-BX6aIiy-.jpg",
  shop: "boutique-storefront-DsTFcWEI.jpg",
  fabric: "boutique-fabrics-Cdr9fT36.jpg",
  wedding: "wedding-hero-Ce58TFcD.jpg",
  women: "women-suits-hero-BOfkQdXH.png",
  measure: "measurements-hero-BKGWc_a6.jpg"
};

const products = [
  { name: "Charcoal Wool Suit", image: "suit-charcoal-front-D8VzBoLA.png", category: "suits", gender: "men", label: "Business Suit", detail: "Classic office tailoring with a clean Bangkok bespoke fit." },
  { name: "Glen Plaid Double-Breasted", image: "suit-glen-front-DmjC9ZfS.png", category: "suits", gender: "men", label: "Statement Suit", detail: "Structured tailoring for confident formal and business wear." },
  { name: "Cream Linen Suit", image: "suit-cream-front-C1Nve6rn.png", category: "suits", gender: "men", label: "Tropical Suit", detail: "Lightweight linen for destination weddings and warm weather." },
  { name: "Blue Hopsack Suit", image: "suit-blue-front-iGSiV6W9.png", category: "suits", gender: "men", label: "Travel Suit", detail: "Easy-wearing cloth with a sharp, versatile silhouette." },
  { name: "Classic Navy Suit", image: "men-suits-1-s-hMmhZu.jpg", category: "suits", gender: "men", label: "Suits", detail: "A reliable first bespoke suit for business and formal events." },
  { name: "Modern Grey Suit", image: "men-suits-2-DMyieYPZ.jpg", category: "suits", gender: "men", label: "Suits", detail: "A balanced neutral suit with precise shoulder and sleeve fit." },
  { name: "Evening Black Suit", image: "men-suits-3-CqykNgQ1.jpg", category: "suits", gender: "men", label: "Formal", detail: "Dark formal tailoring for dinners, events and ceremonies." },
  { name: "Contemporary Brown Suit", image: "men-suits-4-B-prmpqK.jpg", category: "suits", gender: "men", label: "Suits", detail: "Warm toned tailoring for modern business wardrobes." },
  { name: "White Business Shirt", image: "men-shirts-1-CppgV8tf.jpg", category: "shirts", gender: "men", label: "Shirts", detail: "Custom collar, cuff, placket and monogram options." },
  { name: "Blue Cotton Shirt", image: "men-shirts-2-LKHSWaqe.jpg", category: "shirts", gender: "men", label: "Shirts", detail: "Breathable cotton shirting cut to your measurements." },
  { name: "Black Tie Tuxedo", image: "men-tuxedos-1-DBdWgoob.jpg", category: "tuxedos", gender: "men", label: "Tuxedos", detail: "Peak or shawl lapel options for black-tie occasions." },
  { name: "Satin Lapel Tuxedo", image: "men-tuxedos-2-Dud5P7Z7.jpg", category: "tuxedos", gender: "men", label: "Tuxedos", detail: "Formal evening tailoring with satin finishing." },
  { name: "Tailored Jacket", image: "men-jackets-1-ST2iy3tD.jpg", category: "jackets", gender: "men", label: "Jackets", detail: "Smart jackets for travel, meetings and casual dress codes." },
  { name: "Casual Blazer", image: "men-jackets-2-B3Q_1M9p.jpg", category: "jackets", gender: "men", label: "Jackets", detail: "Soft construction with casual cloth and refined finishing." },
  { name: "Women's Power Suit", image: "women-suit-1-Bjc_oU61.jpg", category: "suits", gender: "women", label: "Women", detail: "Tailored proportions for business, events and travel." },
  { name: "Women's Navy Suit", image: "women-suit-2-OkB1O29x.webp", category: "suits", gender: "women", label: "Women", detail: "A polished navy suit with flattering structure." },
  { name: "Women's Ivory Suit", image: "women-suit-3-BA5SkpUj.jpg", category: "suits", gender: "women", label: "Women", detail: "Light-toned tailoring for ceremonies and occasions." },
  { name: "Bespoke Dress", image: "women-dresses-1-CezltPxc.jpg", category: "dresses", gender: "women", label: "Women", detail: "Custom dresses with fabric, lining and silhouette guidance." },
  { name: "Silk Blouse", image: "women-blouses-1-D8ibKzDh.jpg", category: "blouses", gender: "women", label: "Women", detail: "Soft blouse tailoring in silk, cotton and blended fabrics." },
  { name: "Women's Coat", image: "women-coats-1-BgoOvt53.jpg", category: "coats", gender: "women", label: "Women", detail: "Tailored coats with shape, lining and pocket options." }
];

const services = [
  { title: "Bespoke Suits", route: "/men/suits", image: "men-suits-1-s-hMmhZu.jpg", copy: "Business, wedding and travel suits made from your measurements with guided fabric selection.", goal: "quote_request" },
  { title: "Custom Shirts", route: "/men/shirts", image: "men-shirts-1-CppgV8tf.jpg", copy: "Collar, cuff, button, monogram and fit details for business and casual shirts.", goal: "quote_request" },
  { title: "Wedding Tailoring", route: "/wedding", image: "category-wedding-DRNUCz3x.jpg", copy: "Coordinated groom, groomsmen and family tailoring with appointment planning.", goal: "appointment_request" },
  { title: "Ladies Tailoring", route: "/women/suits", image: "women-suit-1-Bjc_oU61.jpg", copy: "Women's suits, dresses, blouses and coats shaped around posture and preference.", goal: "quote_request" },
  { title: "Tuxedos & Formalwear", route: "/men/tuxedos", image: "men-tuxedos-1-DBdWgoob.jpg", copy: "Black tie tuxedos, dinner jackets and formal shirts with satin finishing.", goal: "quote_request" },
  { title: "Remote Reorders", route: "/measurements", image: "measurements-hero-BKGWc_a6.jpg", copy: "Measurement guidance and worldwide delivery for returning clients and overseas orders.", goal: "measurement_start" }
];

const packages = [
  { name: "Essential Business", items: "1 suit + 2 shirts", bestFor: "First-time clients, interviews and office wardrobes", fabrics: "Navy, charcoal or mid-grey wool blends", timeline: "2-3 fitting visits recommended", goal: "quote_request" },
  { name: "Executive Rotation", items: "2 suits + 4 shirts", bestFor: "Weekly business wear with mix-and-match fabric planning", fabrics: "Wool, stretch wool, cotton shirting", timeline: "Plan fabric combinations before first fitting", goal: "quote_request" },
  { name: "Wedding Party", items: "Groom suit or tuxedo + shirts + group coordination", bestFor: "Destination weddings and coordinated formal looks", fabrics: "Tuxedo cloth, tropical wool, linen blends", timeline: "Book 3-6 weeks ahead when possible", goal: "appointment_request" },
  { name: "Travel Wardrobe", items: "Jacket + trousers + shirts", bestFor: "Lightweight cloth, easy packing and warm-weather comfort", fabrics: "Hopsack, linen, cotton, wrinkle-resistant blends", timeline: "Ideal for Bangkok visitors and remote reorders", goal: "quote_request" }
];

const customerPaths = [
  { title: "I need a business suit", route: "/men/suits", image: "men-suits-1-s-hMmhZu.jpg", copy: "Start with navy, charcoal or grey. Choose a conservative lapel, practical pockets and durable cloth.", cta: "Browse suits", goal: "quote_request" },
  { title: "I am planning a wedding", route: "/wedding", image: "category-wedding-DRNUCz3x.jpg", copy: "Compare groom suits, tuxedos, group coordination, wedding shirts and timeline planning.", cta: "Plan wedding look", goal: "appointment_request" },
  { title: "I want shirts made", route: "/men/shirts", image: "men-shirts-1-CppgV8tf.jpg", copy: "Browse collar, cuff, fit, fabric and monogram choices for business or casual shirts.", cta: "View shirts", goal: "quote_request" },
  { title: "I need ladies tailoring", route: "/women/suits", image: "women-suit-1-Bjc_oU61.jpg", copy: "Explore suits, blazers, dresses, blouses and coats with proportion-focused fitting.", cta: "See womenswear", goal: "appointment_request" },
  { title: "I am visiting Bangkok soon", route: "/book-appointment", image: assets.shop, copy: "Book a fitting slot and share travel dates so the team can advise a realistic schedule.", cta: "Book fitting", goal: "appointment_request" },
  { title: "I want remote delivery", route: "/measurements", image: assets.measure, copy: "Use measurement guidance and send garment goals for worldwide delivery or reorders.", cta: "Start remote order", goal: "measurement_start" }
];

const fabricOptions = [
  { name: "Tropical Wool", bestFor: "Business suits, Bangkok weather, travel", feel: "Breathable, polished, crease resistant" },
  { name: "Linen & Linen Blends", bestFor: "Beach weddings, warm-weather suits, casual jackets", feel: "Light, textured, relaxed" },
  { name: "Cotton Shirting", bestFor: "Business shirts, daily wear, easy reorders", feel: "Crisp, breathable, versatile" },
  { name: "Tuxedo Cloth", bestFor: "Black tie, wedding receptions, formal dinners", feel: "Sharp structure with satin finishing" },
  { name: "Cashmere & Wool Blends", bestFor: "Premium jackets, coats, cooler travel", feel: "Soft, refined, elevated" },
  { name: "Performance Blends", bestFor: "Frequent travelers and office rotation", feel: "Comfortable, flexible, practical" }
];

const detailOptions = [
  { title: "Fit", items: ["Classic", "Modern", "Slim", "Relaxed travel fit"] },
  { title: "Jacket Details", items: ["Notch, peak or shawl lapel", "Single or double breasted", "Patch, flap or jetted pockets", "Side, center or no vents"] },
  { title: "Shirt Details", items: ["Spread, cutaway or button-down collar", "Barrel or French cuffs", "Plain, covered or placket front", "Monogram placement"] },
  { title: "Finishing", items: ["Lining color", "Buttons", "Contrast stitching", "Name label and reorder notes"] }
];

const appointmentSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"];
const leadStatuses = ["new", "contacted", "booked", "closed"];

const categoryGuides = {
  suits: {
    title: "How to choose a custom suit",
    points: ["Start with occasion: business, wedding, travel or formal", "Choose cloth weight for Bangkok weather or destination climate", "Bring reference photos for lapel, trouser and silhouette preference", "Plan at least one fitting for best results"]
  },
  shirts: {
    title: "How to choose custom shirts",
    points: ["Decide business, casual or formal use", "Choose collar shape based on tie/no-tie wear", "Pick cuff style and monogram preference", "Order multiple shirts once the fit is confirmed"]
  },
  tuxedos: {
    title: "How to choose formalwear",
    points: ["Choose peak or shawl lapel", "Confirm black tie, wedding or dinner jacket dress code", "Match shirt, buttons, bow tie and satin finishing", "Book early for event-date confidence"]
  },
  jackets: {
    title: "How to choose jackets and blazers",
    points: ["Decide soft casual construction or sharper business structure", "Pick fabric by climate and travel needs", "Choose patch pockets for casual wear or flap pockets for business", "Pair with trousers, chinos or denim"]
  },
  dresses: {
    title: "How to choose bespoke dresses",
    points: ["Bring occasion details and reference photos", "Discuss movement, lining and fabric drape", "Confirm sleeve, neckline and length preference", "Plan fitting time before the event"]
  },
  blouses: {
    title: "How to choose blouses",
    points: ["Choose silk, cotton or blended fabric", "Pick neckline, sleeve and cuff details", "Match blouse length to skirts or trousers", "Save measurements for easy reorders"]
  },
  coats: {
    title: "How to choose coats",
    points: ["Choose travel, business or cold-weather purpose", "Confirm lining and pocket needs", "Plan shoulder and sleeve fit around layering", "Pick durable buttons and fabric weight"]
  }
};

const reviews = [
  ["Srijana Gmr", "Quality of fabric and final touch is really amazing."],
  ["Rigor Lois Alamar", "A pleasant experience. Great service, craftsmanship and value."],
  ["S Tanoni", "Professional guidance, great price and an excellent finished product."]
];

const adGroups = {
  "bespoke-suits-bangkok": {
    title: "Bespoke Suits in Bangkok",
    eyebrow: "Google Ads Landing Page",
    hero: assets.hero,
    service: "Bespoke suit consultation",
    route: "/men/suits",
    audience: "Travelers and Bangkok professionals searching for custom suits",
    promise: "Hand-cut suits, guided cloth selection and fittings at Platinum Fashion Mall.",
    bullets: ["Business and wedding suit options", "Tropical-weight wool, linen and blends", "Worldwide delivery and reorder support"],
    keywords: ["bespoke suits bangkok", "custom suit bangkok", "tailor bangkok", "suit tailor near me"],
    negatives: ["free", "pattern", "factory job", "cheap uniform"],
    goal: "quote_request"
  },
  "wedding-suits-bangkok": {
    title: "Wedding Suits & Tuxedos",
    eyebrow: "Wedding Ad Group",
    hero: assets.wedding,
    service: "Wedding appointment",
    route: "/wedding",
    audience: "Grooms, wedding parties and destination wedding visitors",
    promise: "Formalwear planning for the groom, groomsmen and family, with fittings timed around the event.",
    bullets: ["Groom suits, tuxedos and shirts", "Group fabric and color coordination", "Rush consultation options for Bangkok visitors"],
    keywords: ["wedding suit bangkok", "groom suit tailor", "custom tuxedo bangkok", "destination wedding suit"],
    negatives: ["rental", "dress only", "second hand"],
    goal: "appointment_request"
  },
  "custom-shirts-bangkok": {
    title: "Custom Shirts in Bangkok",
    eyebrow: "Shirts Ad Group",
    hero: "men-shirts-3-B4wffgUr.jpg",
    service: "Custom shirt quote",
    route: "/men/shirts",
    audience: "Clients looking for tailored business shirts and reorders",
    promise: "Made-to-measure shirts with collar, cuff, fabric and monogram options.",
    bullets: ["Cotton, linen and blended shirting", "Business, casual and formal styles", "Saved measurements for easy reorders"],
    keywords: ["custom shirts bangkok", "tailored shirts bangkok", "made to measure shirt", "shirt tailor near me"],
    negatives: ["t shirt", "printing", "laundry"],
    goal: "quote_request"
  },
  "ladies-tailoring-bangkok": {
    title: "Ladies Tailoring in Bangkok",
    eyebrow: "Women Ad Group",
    hero: assets.women,
    service: "Ladies tailoring consultation",
    route: "/women/suits",
    audience: "Women searching for custom suits, dresses, blouses and coats",
    promise: "Tailoring shaped around posture, proportion, fabric feel and real wearing occasions.",
    bullets: ["Women's suits and blazers", "Dresses, blouses and coats", "Fabric guidance for work, events and travel"],
    keywords: ["ladies tailor bangkok", "women suit tailor", "custom dress bangkok", "female tailor bangkok"],
    negatives: ["bridal makeup", "rental", "sewing class"],
    goal: "appointment_request"
  },
  "express-tailoring-bangkok": {
    title: "Express Tailoring for Bangkok Visitors",
    eyebrow: "Travelers Ad Group",
    hero: assets.shop,
    service: "Express fitting request",
    route: "/custom-made",
    audience: "Tourists and business travelers with limited time in Bangkok",
    promise: "Book early in your trip for consultation, fitting and delivery planning.",
    bullets: ["Fast consultation and fitting schedule", "Hotel and worldwide delivery options", "Clear guidance on realistic turnaround"],
    keywords: ["express tailor bangkok", "24 hour suit bangkok", "tailor near platinum mall", "bangkok suit delivery"],
    negatives: ["same day free", "repair only", "costume"],
    goal: "appointment_request"
  }
};

const img = (name) => A + name;

function btn(href, text, className = "", goal = "", extra = "") {
  const isInternal = href.startsWith("/");
  const goalAttr = goal ? ` data-goal="${goal}"` : "";
  const linkAttr = isInternal ? " data-link" : "";
  return `<a href="${href}" class="btn ${className}"${linkAttr}${goalAttr} ${extra}>${text}</a>`;
}

function phoneLink(text = shop.phone) {
  return `<a href="${shop.phoneHref}" data-goal="phone_call">${text}</a>`;
}

function whatsappLink(text = "WhatsApp") {
  return `<a href="${shop.whatsapp}" data-goal="whatsapp_click">${text}</a>`;
}

function readLeadContext() {
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_adgroup", "gclid", "gbraid", "wbraid"];
  const params = new URLSearchParams(location.search);
  const found = {};

  keys.forEach((key) => {
    const value = params.get(key);
    if (value) found[key] = value;
  });

  const currentAdGroup = currentAdGroupSlug();
  if (currentAdGroup) found.ad_group = currentAdGroup;

  if (Object.keys(found).length) {
    sessionStorage.setItem("jstLeadContext", JSON.stringify(found));
    return found;
  }

  try {
    return JSON.parse(sessionStorage.getItem("jstLeadContext") || "{}");
  } catch {
    return {};
  }
}

function currentAdGroupSlug() {
  const match = location.pathname.match(/^\/ads\/([^/]+)/);
  return match ? match[1] : "";
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatLeadDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

async function parseApiResponse(response) {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    return { error: "Backend API did not return JSON. Run the site with npm run dev or deploy it to a Node host." };
  }
}

function setupGoogleAds() {
  const config = window.JST_ADS_CONFIG || {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtagFallback() {
    window.dataLayer.push(arguments);
  };

  if (!config.googleAdsId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.googleAdsId)}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", config.googleAdsId);
}

function trackConversion(goal, details = {}) {
  const config = window.JST_ADS_CONFIG || {};
  const context = readLeadContext();
  const params = {
    page_path: location.pathname,
    ad_group: currentAdGroupSlug() || context.ad_group || "",
    ...context,
    ...details
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: goal, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", goal, params);

    const label = config.conversionLabels && config.conversionLabels[goal];
    if (config.googleAdsId && label) {
      window.gtag("event", "conversion", {
        send_to: `${config.googleAdsId}/${label}`,
        value: details.value || 1,
        currency: details.currency || "THB",
        event_callback: details.event_callback
      });
    }
  }
}

function pageHero(title, sub, bg) {
  return `<section class="page-hero" style="background-image:url('${img(bg)}')"><div class="inner"><span class="eyebrow">${sub}</span><h1>${title}</h1></div></section>`;
}

function leadBar() {
  return `<section class="lead-strip"><span>Need a fitting in Bangkok?</span><strong>${shop.hours}</strong><div>${phoneLink("Call")} ${whatsappLink("WhatsApp")} ${btn("/book-appointment", "Book", "dark compact", "appointment_request")}</div></section>`;
}

function trustStrip() {
  return `<section class="trust-strip">
    <div><strong>25+</strong><span>Years tailoring</span></div>
    <div><strong>10K+</strong><span>Clients fitted</span></div>
    <div><strong>200+</strong><span>Delivery countries</span></div>
    <div><strong>2-4</strong><span>Fitting steps</span></div>
  </section>`;
}

function serviceGrid() {
  return `<div class="service-grid">${services.map((service) => `
    <a class="service-card" href="${service.route}" data-link data-goal="${service.goal}">
      <img loading="lazy" src="${img(service.image)}" alt="${service.title}">
      <div>
        <span class="eyebrow">Tailor Shop Service</span>
        <h3>${service.title}</h3>
        <p>${service.copy}</p>
      </div>
    </a>
  `).join("")}</div>`;
}

function packageGrid() {
  return `<div class="package-grid package-grid-upgraded">${packages.map((item, index) => `
    <article class="package-card package-card-upgraded ${item.goal === "appointment_request" ? "featured" : ""}">
      <div class="package-top"><span>Package</span><b>${String(index + 1).padStart(2, "0")}</b></div>
      <h3>${item.name}</h3>
      <strong>${item.items}</strong>
      <p>${item.bestFor}</p>
      <div class="package-detail-row"><span>Cloth</span><em>${item.fabrics}</em></div>
      <div class="package-detail-row"><span>Timing</span><em>${item.timeline}</em></div>
      ${btn(item.goal === "appointment_request" ? "/book-appointment" : "/request-quote", item.goal === "appointment_request" ? "Book Appointment" : "Request Quote", item.goal === "appointment_request" ? "gold package-cta" : "dark package-cta", item.goal, `data-service="${item.name}"`)}
    </article>
  `).join("")}</div>`;
}

function appointmentScheduler() {
  return `<div class="appointment-scheduler" data-scheduler>
    <div class="scheduler-summary">
      <div class="scheduler-logo">JOE SUIT</div>
      <span class="eyebrow">Private Fitting</span>
      <h3>Book your private appointment</h3>
      <p>Choose a date and time for your fitting at Platinum Fashion Mall, Bangkok.</p>
      <div class="scheduler-facts">
        <span>1 hr fitting</span>
        <span>Bangkok Time (GMT+7)</span>
        <span>Open daily 10am-8pm</span>
      </div>
    </div>
    <div class="scheduler-picker">
      <h3>Select a Date & Time</h3>
      <div class="calendar-head">
        <button type="button" aria-label="Previous month" data-calendar-prev>‹</button>
        <strong data-calendar-label></strong>
        <button type="button" aria-label="Next month" data-calendar-next>›</button>
      </div>
      <div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
      <div class="calendar-grid" data-calendar-days></div>
      <div class="selected-slot">
        <span data-selected-date-label>Select a date</span>
        <div class="time-slots" data-time-slots></div>
      </div>
      <input type="hidden" name="preferred_date" data-selected-date-input>
      <input type="hidden" name="preferred_time" data-selected-time-input>
    </div>
  </div>`;
}

function leadForm(defaultService = "Request a suit quote", leadType = "quote") {
  const context = readLeadContext();
  const source = [context.utm_campaign, context.utm_adgroup || context.ad_group, context.utm_term].filter(Boolean).join(" / ");
  const serviceOptions = leadType === "appointment"
    ? ["Book an appointment", "Wedding fitting", "Express Bangkok visit", "Ladies tailoring appointment", "Group fitting", "Alteration consultation"]
    : ["Request a suit quote", "Wedding tailoring quote", "Custom shirts", "Ladies tailoring quote", "Express fitting quote", "Worldwide shipping", "Remote reorder"];
  if (!serviceOptions.includes(defaultService)) serviceOptions.unshift(defaultService);

  return `<form class="form lead-form" id="contact-form" data-default-service="${defaultService}" data-lead-type="${leadType}">
    ${leadType === "appointment" ? appointmentScheduler() : ""}
    <div class="field-grid">
      <input name="name" required placeholder="Your name">
      <input name="email" type="email" required placeholder="Email">
      <input name="phone" required placeholder="Phone / WhatsApp">
      <select name="service" aria-label="Service">
        ${serviceOptions.map((service) => `<option${service === defaultService ? " selected" : ""}>${service}</option>`).join("")}
      </select>
      <select name="timeline" aria-label="Timeline">
        ${leadType === "appointment" ? "<option>Preferred: today</option><option>Preferred: tomorrow</option>" : ""}
        <option>Visit this week</option>
        <option>Within 2 weeks</option>
        <option>This month</option>
        <option>Planning ahead</option>
      </select>
      <select name="budget" aria-label="Budget">
        <option>Need fabric guidance</option>
        <option>Business range</option>
        <option>Premium fabric range</option>
        <option>Wedding / group quote</option>
      </select>
    </div>
    <textarea name="message" placeholder="${leadType === "appointment" ? "Tell us your travel dates, garment type, and who is coming to the fitting." : "Tell us what you need, your travel dates, or how many garments you want."}"></textarea>
    <input type="hidden" name="lead_source" value="${source}">
    <button class="btn dark" type="submit">${leadType === "appointment" ? "REQUEST APPOINTMENT" : "SEND ENQUIRY"}</button>
    <div class="notice">Thank you. This ${leadType === "appointment" ? "appointment request" : "quote enquiry"} is ready. Please also message us on WhatsApp for the fastest reply.</div>
  </form>`;
}

function conversionPanel(defaultService = "Request a suit quote", leadType = "quote") {
  return `<div class="conversion-panel">
    <div>
      <span class="eyebrow">Fastest Response</span>
      <h2>${leadType === "appointment" ? "Book a fitting appointment" : "Request a clear tailoring quote"}</h2>
      <p>${leadType === "appointment" ? "Share your preferred date, time, garment type and travel plan so the tailoring team can prepare the right fitting slot." : "Share your garment type, travel dates and phone number. The tailoring team can confirm fabric options, fitting timing and delivery choices."}</p>
      <div class="quick-actions">
        ${btn(shop.whatsapp, "WhatsApp Now", "gold", "whatsapp_click")}
        ${btn(shop.phoneHref, "Call Shop", "dark", "phone_call")}
      </div>
    </div>
    ${leadForm(defaultService, leadType)}
  </div>`;
}

function customerPathGrid() {
  return `<div class="path-grid">${customerPaths.map((item, index) => `
    <a class="path-card" href="${item.route}" data-link data-goal="${item.goal}">
      <div class="path-card-media">
        <img loading="lazy" src="${img(item.image)}" alt="${item.title}">
        <span class="path-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="path-card-body">
        <span class="eyebrow">Browse by need</span>
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
        <span class="path-card-cta">${item.cta}</span>
      </div>
    </a>
  `).join("")}</div>`;
}

function fabricGuide() {
  return `<div class="fabric-showcase">
    <article class="fabric-feature" style="background-image:url('${img(assets.fabric)}')">
      <span class="eyebrow">Fabric Library</span>
      <h3>Choose cloth by climate, occasion and how it should move.</h3>
      <p>Use these notes before asking for a quote, then refine color, weight and texture during the fitting.</p>
    </article>
    <div class="fabric-grid">${fabricOptions.map((item, index) => `
      <article class="fabric-card">
        <span class="fabric-swatch"></span>
        <span class="fabric-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="eyebrow">${item.bestFor}</span>
        <h3>${item.name}</h3>
        <p>${item.feel}</p>
      </article>
    `).join("")}</div>
  </div>`;
}

function detailGuide() {
  return `<div class="detail-showcase">
    <article class="detail-panel" style="background-image:url('${img(assets.atelier)}')">
      <span class="eyebrow">Made Personal</span>
      <h3>Small choices make the garment feel like yours.</h3>
      <p>Bring reference photos or a favourite garment. The team will guide proportions, finishing and practical wearing details.</p>
    </article>
    <div class="detail-grid">${detailOptions.map((group, index) => `
      <article class="detail-card">
        <span class="detail-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${group.title}</h3>
        <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    `).join("")}</div>
  </div>`;
}

function appointmentPage() {
  return `${pageHero("BOOK AN APPOINTMENT", "Dedicated appointment lead", assets.shop)}
  ${leadBar()}
  <section class="section">
    <div class="landing-grid">
      <div>
        <span class="eyebrow">Appointment Only</span>
        <h2>Reserve fitting time before you visit</h2>
        <p>This page separates appointment leads from quote enquiries. Use it for Google Ads appointment goals, walk-in planning, wedding fitting requests and Bangkok visitor scheduling.</p>
        <ul class="value-list">
          <li>Tell us preferred date and time</li>
          <li>Share garment type and travel dates</li>
          <li>Choose fitting purpose: business, wedding, ladies tailoring or express visit</li>
          <li>Fastest confirmation is by WhatsApp or phone</li>
        </ul>
        <div class="appointment-notes">
          <article><strong>Best time to book</strong><span>Early in your Bangkok trip gives more room for fittings.</span></article>
          <article><strong>Bring if possible</strong><span>Reference photos, favorite garment, event date and shoe choice.</span></article>
        </div>
      </div>
      ${conversionPanel("Book an appointment", "appointment")}
    </div>
  </section>`;
}

function quotePage() {
  return `${pageHero("REQUEST A QUOTE", "Quote lead", assets.fabric)}
  ${leadBar()}
  <section class="section">
    <div class="landing-grid">
      <div>
        <span class="eyebrow">Quote Enquiry</span>
        <h2>Tell us what you want tailored</h2>
        <p>This page is for customers comparing garments, packages, fabrics and delivery options before booking a fitting.</p>
        <ul class="value-list">
          <li>Choose garment type and estimated timeline</li>
          <li>Mention quantity for suits, shirts or wedding groups</li>
          <li>Ask about fabric ranges and delivery options</li>
          <li>Use UTM/ad group data to separate quote leads in reports</li>
        </ul>
      </div>
      ${conversionPanel("Request a suit quote", "quote")}
    </div>
  </section>`;
}

function categoryGuide(category) {
  const guide = categoryGuides[category] || categoryGuides.suits;
  return `<div class="guide-panel">
    <div>
      <span class="eyebrow">Buying Guide</span>
      <h2>${guide.title}</h2>
    </div>
    <ul>${guide.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  </div>`;
}

function journalCards() {
  return `<div class="journal-grid">${[
    ["Your First Fitting: What to Expect", assets.tailor],
    ["When to Dry Clean Your Suit", assets.fabric],
    ["How to Choose a Wedding Suit", assets.wedding]
  ].map((item) => `<article class="card"><img loading="lazy" src="${img(item[1])}" alt=""><div class="card-body"><span class="eyebrow">The Journal - 4 min</span><h3>${item[0]}</h3><p>A concise guide from our Bangkok atelier.</p></div></article>`).join("")}</div>`;
}

function home() {
  return `<section class="hero" style="background-image:url('${img(assets.hero)}')">
    <div class="hero-copy">
      <span class="eyebrow">Bangkok's Atelier</span>
      <h1>BESPOKE SUITS, SHIRTS & WEDDING TAILORING</h1>
      <p>Custom tailoring at Platinum Fashion Mall with guided fabrics, precise fittings and worldwide delivery.</p>
      <div class="actions">${btn("/book-appointment", "Book Appointment", "gold", "appointment_request")}${btn("/services", "Browse Services", "", "quote_request")}</div>
    </div>
  </section>
  ${leadBar()}
  ${trustStrip()}
  <section class="section alt">
    <div class="section-head start-head"><span class="eyebrow">Start Here</span><h2 class="section-title">Choose what you want to see</h2><p>Customers can browse by need instead of guessing which page to open first.</p></div>
    ${customerPathGrid()}
  </section>
  <section class="section">
    <div class="section-head"><span class="eyebrow">Tailor Shop Services</span><h2 class="section-title">Made for business, weddings and travel</h2><p>Everything a serious tailor shop needs online: clear garment categories, appointment paths, quote requests and fast WhatsApp contact.</p></div>
    ${serviceGrid()}
  </section>
  <section class="section alt">
    <div class="section-head"><span class="eyebrow">Why Bespoke</span><h2 class="section-title">Custom Tailored vs Off the Rack</h2></div>
    <div class="compare"><article><h3>Custom Tailored</h3><p>Made for you, only you.\n- Cut to your exact measurements for a better fit.\n- Choose fabric, lining, lapel, buttons and monogram.\n- Hand-finished construction built to age gracefully.\n- A silhouette shaped around your posture.</p></article><article><h3>Off the Rack</h3><p>Made for standard sizing.\n- Fit is usually a compromise.\n- Fabric and styling are chosen by the brand.\n- Machine-made construction prioritises volume.\n- Alterations can only correct so much.</p></article></div>
  </section>
  <section class="looks">${products.slice(0, 4).map((product) => `<a class="look" href="/men/suits" data-link data-goal="quote_request"><img src="${img(product.image)}" alt="${product.name}"><div class="caption"><span class="eyebrow">${product.label}</span><h3>${product.name}</h3><small>BROWSE SUITS</small></div></a>`).join("")}</section>
  <section class="section alt">
    <div class="section-head"><span class="eyebrow">Design Your Own</span><h2 class="section-title">Choose Your Garment</h2><p>Endless customisation options. Every detail tailored to your exact measurements.</p></div>
    <div class="categories">${[
      ["SUITS", "men-suits-1-s-hMmhZu.jpg", "/men/suits"],
      ["SHIRTS", "men-shirts-1-CppgV8tf.jpg", "/men/shirts"],
      ["TUXEDOS", "men-tuxedos-1-DBdWgoob.jpg", "/men/tuxedos"],
      ["WEDDING", "category-wedding-DRNUCz3x.jpg", "/wedding"]
    ].map((item) => `<a class="cat" href="${item[2]}" data-link data-goal="quote_request"><img src="${img(item[1])}" alt="${item[0]}"><h3>${item[0]}</h3><span class="eyebrow">View Collection</span></a>`).join("")}</div>
  </section>
  <section class="split"><img src="${img(assets.atelier)}" alt="Joe Suit atelier"><div class="split-copy"><span class="eyebrow">Since 2000 - Bangkok's Atelier</span><h2>A Legacy of Craftsmanship</h2><p>Joe Suit Tailor and Silk Custom Tailor is a Bangkok-based atelier producing high-quality bespoke clothing for over two decades. Every piece is handcrafted with precision at an honest price.</p><div class="stats"><div><strong>25+</strong><small>YEARS</small></div><div><strong>100+</strong><small>OPTIONS</small></div><div><strong>10K+</strong><small>CLIENTS</small></div></div><div class="actions" style="justify-content:flex-start">${btn("/about", "Our Story", "dark")}</div></div></section>
  <section class="section"><div class="section-head"><span class="eyebrow">The Process</span><h2 class="section-title">How It Works</h2></div><div class="steps">${[
    ["01", "DESIGN", "Choose your fabric, style, lapels, linings and finishing details."],
    ["02", "MEASURE", "Visit the atelier or follow our guided measurement process."],
    ["03", "CRAFT", "Master tailors hand-cut and assemble your garment."],
    ["04", "RECEIVE", "Collect in Bangkok or receive secure worldwide delivery."]
  ].map((step) => `<div class="step"><b>${step[0]}</b><h3>${step[1]}</h3><p>${step[2]}</p></div>`).join("")}</div></section>
  <section class="section alt"><div class="section-head"><span class="eyebrow">Fabric Guide</span><h2 class="section-title">Compare fabric choices before you ask</h2><p>A clearer starting point for customers who want to understand comfort, occasion and budget.</p></div>${fabricGuide()}</section>
  <section class="section"><div class="section-head"><span class="eyebrow">Customisation</span><h2 class="section-title">Details you can choose</h2><p>These options help customers prepare photos, preferences and questions before the fitting.</p></div>${detailGuide()}</section>
  <section class="section alt"><div class="section-head"><span class="eyebrow">Packages</span><h2 class="section-title">Useful starting points for quotes</h2><p>Use these package paths for Google Ads sitelinks, quote forms and consultation planning.</p></div>${packageGrid()}</section>
  <section class="split"><div class="split-copy"><span class="eyebrow">Bespoke For Her</span><h2>Women's Clothing</h2><p>Suits, dresses, blouses and coats, meticulously tailored to celebrate your silhouette.</p><div class="actions" style="justify-content:flex-start">${btn("/women/suits", "Browse Women's Wear", "dark", "quote_request")}</div></div><img src="${img(assets.women)}" alt="Women's bespoke tailoring"></section>
  <section class="section world"><div class="section-head"><span class="eyebrow">Worldwide Delivery</span><h2 class="section-title">Tailored in Bangkok.<br>Delivered Globally.</h2><p>Secure, tracked, fully insured express delivery to over 200 countries.</p></div><div class="features"><div><h3>EXPRESS AIR</h3><p>DHL and FedEx door-to-door.</p></div><div><h3>FULLY INSURED</h3><p>Tracked end-to-end.</p></div><div><h3>REORDER READY</h3><p>Saved measurements for future garments.</p></div></div><div class="actions">${btn("/request-quote", "Get Shipping Quote", "gold", "quote_request")}</div></section>
  <section class="section alt"><div class="section-head"><span class="eyebrow">Excellent - 500+ reviews</span><h2 class="section-title">What Our Clients Say</h2></div><div class="reviews">${reviews.map((review) => `<article class="review"><div class="stars">*****</div><p>${review[1]}</p><strong>${review[0]}</strong></article>`).join("")}</div></section>
  <section class="section"><div class="section-head"><span class="eyebrow">The Journal</span><h2 class="section-title">Notes on Cloth & Craft</h2></div>${journalCards()}</section>`;
}

function catalog(gender, category) {
  const title = category.replaceAll("-", " ").toUpperCase();
  let filtered = products.filter((product) => product.gender === gender && product.category === category);
  if (!filtered.length && gender === "men" && ["pants", "vests"].includes(category)) filtered = products.filter((product) => product.gender === "men" && product.category === "suits").slice(0, 6);
  if (!filtered.length) filtered = products.filter((product) => product.gender === gender);

  return `${pageHero(title, `${gender}'s collection`, gender === "women" ? assets.women : "hero-tailor-OS_5BXdI.jpg")}
  ${leadBar()}
  <section class="section">
    <div class="section-head"><span class="eyebrow">Made To Measure</span><h2 class="section-title">${title}</h2><p>Browse signature silhouettes, then customise fabric, fit and finishing details with our tailors.</p></div>
    <div class="product-grid">${filtered.map((product) => `<article class="card"><img loading="lazy" src="${img(product.image)}" alt="${product.name}"><div class="card-body"><span class="eyebrow">${product.label}</span><h3>${product.name}</h3><p>${product.detail}</p><a href="/request-quote" data-link data-goal="quote_request">REQUEST QUOTE</a></div></article>`).join("")}</div>
  </section>
  <section class="section alt">${categoryGuide(category)}</section>
  <section class="section"><div class="section-head"><span class="eyebrow">Options</span><h2 class="section-title">Fabric and detail choices</h2><p>Use these notes to compare before contacting the shop.</p></div>${fabricGuide()}<div class="spacer"></div>${detailGuide()}</section>
  <section class="section alt">${conversionPanel(category === "shirts" ? "Custom shirts" : gender === "women" ? "Ladies tailoring quote" : "Request a suit quote", "quote")}</section>`;
}

function standard(path) {
  const pages = {
    "/about": ["OUR STORY", "Since 2000", assets.atelier, "For more than two decades, Joe Suit Tailor has created bespoke clothing for visitors and Bangkok residents. Our process combines careful consultation, precise measurement, hand-cut patterns and multiple fittings.", "Crafted in Bangkok", "Every garment is made by experienced tailors using carefully selected cloth, thoughtful construction and finishing that rewards close inspection."],
    "/services": ["TAILOR SHOP SERVICES", "Suits, shirts, weddings and reorders", assets.tailor, "Choose a service path and send an enquiry. Each service page is designed to work as a Google Ads destination, organic page or WhatsApp follow-up link.", "Services", ""],
    "/book-appointment": ["BOOK AN APPOINTMENT", "Dedicated appointment lead", assets.shop, "Book a fitting slot, share your travel dates and tell us what you want tailored before you arrive.", "Appointment", ""],
    "/request-quote": ["REQUEST A QUOTE", "Quote lead", assets.fabric, "Send garment details, package interest, delivery needs and timeline so the shop can reply with clearer guidance.", "Quote", ""],
    "/custom-made": ["CUSTOM MADE", "A garment of your own", assets.tailor, "Bespoke means starting with you: your measurements, posture, lifestyle and taste. Choose cloth, silhouette, lapels, pockets, lining, buttons and a personal monogram.", "The Bespoke Process", "Consultation, fabric selection, measurement, first fitting, refinement and final delivery with each stage guided by our tailoring team."],
    "/wedding": ["WEDDING", "Made for the moment", assets.wedding, "From the groom to the entire wedding party, we create coordinated formalwear that feels personal and photographs beautifully.", "Wedding Appointments", "Book early for unhurried fabric selection and fittings. Rush service may be available for Bangkok visitors."],
    "/packages": ["PACKAGES", "Bespoke combinations", assets.fabric, "Choose a practical package for business, travel, weddings or a complete wardrobe refresh. Every item remains fully customisable.", "Popular Packages", ""],
    "/gallery": ["GALLERY", "Selected work", assets.shop, "A closer look at tailored suits, tuxedos, jackets, shirts and womenswear made in our Bangkok atelier.", "Recent Work", ""],
    "/fabrics": ["FABRICS", "Cloth makes the character", assets.fabric, "Explore wool, linen, cotton, silk, cashmere blends and performance fabrics sourced for Bangkok weather and global wardrobes.", "Choose by Purpose", "Business, formal, wedding, travel and tropical-weight fabrics are available in hundreds of colours and patterns."],
    "/journal": ["THE JOURNAL", "Cloth, craft and style", assets.tailor, "Notes from the atelier on choosing, wearing and caring for tailored clothing.", "Latest Articles", ""],
    "/faq": ["FAQ", "Before your visit", assets.shop, "Everything you need to know about appointments, fittings, timing, payments, alterations and shipping.", "Frequently Asked Questions", ""],
    "/measurements": ["MEASUREMENTS", "A precise fit begins here", assets.measure, "Visit our Bangkok atelier for the most accurate fitting, or use our guided diagrams when ordering remotely.", "Self Measurement Guide", ""],
    "/contact": ["CONTACT", "Visit or message us", assets.shop, `${shop.address}. ${shop.hours}.`, "Book an Appointment", ""]
  };

  const p = pages[path] || pages["/about"];
  let body = "";

  if (path === "/book-appointment") {
    return appointmentPage();
  } else if (path === "/request-quote") {
    return quotePage();
  } else if (path === "/services") {
    body = `${customerPathGrid()}<div class="spacer"></div>${serviceGrid()}<div class="spacer"></div>${conversionPanel("Request a suit quote", "quote")}`;
  } else if (path === "/packages") {
    body = `${packageGrid()}<div class="spacer"></div>${conversionPanel("Request a suit quote", "quote")}`;
  } else if (path === "/gallery") {
    body = `<div class="gallery">${products.concat(products.slice(0, 8)).map((product) => `<img loading="lazy" src="${img(product.image)}" alt="${product.name}">`).join("")}</div>`;
  } else if (path === "/journal") {
    body = journalCards();
  } else if (path === "/faq") {
    body = `<div class="faq">${[
      ["How long does a suit take?", "Standard turnaround is usually 24-48 hours, depending on fabric, fittings and complexity. For Google Ads traffic, use the express tailoring page only when the timeline is realistic."],
      ["Do I need an appointment?", "Walk-ins are welcome, but an appointment helps us reserve fitting time for you."],
      ["Can you ship worldwide?", "Yes. We provide tracked, insured express delivery to more than 200 countries."],
      ["Can you copy a favourite garment?", "Yes, in many cases we can reproduce the fit and details while improving construction and fabric."],
      ["Do you tailor for women?", "Yes. We make suits, blazers, trousers, blouses, dresses, skirts and coats."],
      ["Which Google Ads conversions should be primary?", "Use lead form submissions, WhatsApp clicks and phone calls as primary goals. Use landing page views and service clicks as secondary observation goals."]
    ].map((item) => `<details><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join("")}</div>`;
  } else if (path === "/measurements") {
    body = `<div class="measure-grid"><img src="${img("measure-men-diagram-_LcHyY6J.jpg")}" alt="Men measurement guide"><img src="${img("measure-women-diagram-zf_pA9Gv.jpg")}" alt="Women measurement guide"></div><div class="actions">${btn("/request-quote", "Start Measurement Order", "dark", "measurement_start")}</div>`;
  } else if (path === "/contact") {
    body = `<div class="contact-grid"><div><h3>${shop.name}</h3><p>${shop.address}<br>${shop.hours}</p><p>${phoneLink()}<br>${whatsappLink("Chat on WhatsApp")}</p><div class="lead-context"><span class="eyebrow">Choose the right form</span><p>Use Book Appointment for fitting time. Use Request Quote for garment/package questions. This keeps leads separated for follow-up and reporting.</p></div><div class="actions" style="justify-content:flex-start">${btn("/book-appointment", "Book Appointment", "gold", "appointment_request")}${btn("/request-quote", "Request Quote", "dark", "quote_request")}</div></div>${leadForm("General enquiry", "general")}</div>`;
  } else {
    body = `<h2>${p[4]}</h2><p>${p[5]}</p><div class="actions" style="justify-content:flex-start">${btn("/book-appointment", "Book Appointment", "dark", "appointment_request")}${btn("/request-quote", "Request Quote", "dark", "quote_request")}</div>`;
  }

  return `${pageHero(p[0], p[1], p[2])}${leadBar()}<section class="section"><div class="content"><span class="eyebrow">Joe Suit Tailor - Bangkok</span><h2>${p[0]}</h2><p>${p[3]}</p>${body}</div></section>`;
}

function adLanding(slug) {
  const group = adGroups[slug] || adGroups["bespoke-suits-bangkok"];
  const leadType = group.goal === "appointment_request" ? "appointment" : "quote";
  return `<section class="hero ad-hero" style="background-image:url('${img(group.hero)}')">
    <div class="hero-copy">
      <span class="eyebrow">${group.eyebrow}</span>
      <h1>${group.title}</h1>
      <p>${group.promise}</p>
      <div class="actions">${btn(leadType === "appointment" ? "/book-appointment" : "/request-quote", leadType === "appointment" ? "Book Fitting" : "Request Quote", "gold", group.goal, `data-service="${group.service}"`)}${btn(shop.whatsapp, "WhatsApp Quote", "", "whatsapp_click")}</div>
    </div>
  </section>
  ${leadBar()}
  <section class="section">
    <div class="landing-grid">
      <div>
        <span class="eyebrow">Best For</span>
        <h2>${group.audience}</h2>
        <p>${group.promise}</p>
        <ul class="value-list">${group.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="actions" style="justify-content:flex-start">${btn(group.route, "View Collection", "dark", group.goal)}${btn("/measurements", "Measurement Guide", "dark", "measurement_start")}</div>
      </div>
      ${conversionPanel(group.service, leadType)}
    </div>
  </section>
  <section class="section alt">
    <div class="section-head"><span class="eyebrow">Ad Group Support</span><h2 class="section-title">Useful keyword direction</h2><p>Use this landing page as the final URL for one focused ad group. Keep ad copy, keywords and form service aligned.</p></div>
    <div class="ad-support">
      <article><h3>Suggested Keywords</h3><p>${group.keywords.join(", ")}</p></article>
      <article><h3>Negative Keywords</h3><p>${group.negatives.join(", ")}</p></article>
      <article><h3>Primary Goals</h3><p>${group.goal}, ${leadType === "appointment" ? "appointment_form_submit" : "quote_form_submit"}, lead_form_submit, whatsapp_click, phone_call</p></article>
    </div>
  </section>
  <section class="section"><div class="section-head"><span class="eyebrow">Related Work</span><h2 class="section-title">Tailoring examples</h2></div><div class="product-grid">${products.slice(0, 6).map((product) => `<article class="card"><img loading="lazy" src="${img(product.image)}" alt="${product.name}"><div class="card-body"><span class="eyebrow">${product.label}</span><h3>${product.name}</h3><p>${product.detail}</p></div></article>`).join("")}</div></section>`;
}

function adsHub() {
  return `${pageHero("GOOGLE ADS LANDING PAGES", "Campaign planning", assets.fabric)}
  <section class="section"><div class="content"><span class="eyebrow">Ad Group Routing</span><h2>Ready-to-use final URLs</h2><p>Each page captures UTM data, uses a matching enquiry form service and fires conversion events when Google Ads labels are configured.</p>
    <div class="ad-hub">${Object.entries(adGroups).map(([slug, group]) => `<article class="package-card"><span class="eyebrow">${group.eyebrow}</span><h3>${group.title}</h3><p>${group.audience}</p><a href="/ads/${slug}" data-link>Open /ads/${slug}</a></article>`).join("")}</div>
  </div></section>`;
}

function adminPage() {
  return `${pageHero("LEAD ADMIN", "Backend dashboard", assets.fabric)}
  <section class="section admin-dashboard" data-admin-dashboard>
    <div class="admin-shell">
      <div class="section-head">
        <span class="eyebrow">Lead Inbox</span>
        <h2 class="section-title">Appointments and enquiries</h2>
        <p>Review website leads, separate appointment requests from quote enquiries and update follow-up status.</p>
      </div>
      <div class="admin-stats">
        <article><span>Total</span><strong data-admin-count="total">0</strong></article>
        <article><span>Appointments</span><strong data-admin-count="appointment">0</strong></article>
        <article><span>Quotes</span><strong data-admin-count="quote">0</strong></article>
        <article><span>General</span><strong data-admin-count="general">0</strong></article>
        <article><span>New</span><strong data-admin-count="new">0</strong></article>
      </div>
      <div class="admin-toolbar">
        <div class="filterbar admin-filters">
          <button type="button" class="active" data-admin-filter="all">All</button>
          <button type="button" data-admin-filter="appointment">Appointments</button>
          <button type="button" data-admin-filter="quote">Quotes</button>
          <button type="button" data-admin-filter="general">General</button>
        </div>
        <div class="admin-actions">
          <input type="password" data-admin-pin placeholder="Admin PIN">
          <button class="btn dark compact" type="button" data-admin-refresh>Refresh</button>
        </div>
      </div>
      <div class="admin-status" data-admin-status>Loading leads...</div>
      <div class="lead-list" data-admin-list></div>
    </div>
  </section>`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function fromDateKey(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatMonth(date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function formatAppointmentDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function bindScheduler() {
  document.querySelectorAll("[data-scheduler]").forEach((scheduler) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 60);
    const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let visibleMonth = new Date(currentMonth);
    let selectedDate = new Date(today);
    let selectedTime = appointmentSlots[0];

    const label = scheduler.querySelector("[data-calendar-label]");
    const days = scheduler.querySelector("[data-calendar-days]");
    const slots = scheduler.querySelector("[data-time-slots]");
    const dateLabel = scheduler.querySelector("[data-selected-date-label]");
    const dateInput = scheduler.querySelector("[data-selected-date-input]");
    const timeInput = scheduler.querySelector("[data-selected-time-input]");
    const prev = scheduler.querySelector("[data-calendar-prev]");
    const next = scheduler.querySelector("[data-calendar-next]");

    function updateFields() {
      dateInput.value = toDateKey(selectedDate);
      timeInput.value = selectedTime;
      dateLabel.textContent = `${formatAppointmentDate(selectedDate)} at ${selectedTime}`;
    }

    function renderSlots() {
      slots.innerHTML = appointmentSlots.map((slot) => `<button type="button" class="time-slot ${slot === selectedTime ? "selected" : ""}" data-time="${slot}">${slot}</button>`).join("");
      slots.querySelectorAll("[data-time]").forEach((button) => {
        button.onclick = () => {
          selectedTime = button.dataset.time;
          renderSlots();
          updateFields();
        };
      });
      updateFields();
    }

    function renderCalendar() {
      const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
      const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
      const blanks = Array.from({ length: firstDay.getDay() }, () => "<span></span>");
      const dayButtons = [];

      for (let day = 1; day <= daysInMonth; day += 1) {
        const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day);
        const disabled = date < today || date > maxDate;
        const classes = [
          "calendar-day",
          toDateKey(date) === toDateKey(today) ? "today" : "",
          toDateKey(date) === toDateKey(selectedDate) ? "selected" : ""
        ].filter(Boolean).join(" ");

        dayButtons.push(`<button type="button" class="${classes}" data-date="${toDateKey(date)}" ${disabled ? "disabled" : ""}>${day}</button>`);
      }

      label.textContent = formatMonth(visibleMonth);
      days.innerHTML = blanks.concat(dayButtons).join("");
      prev.disabled = visibleMonth.getFullYear() === currentMonth.getFullYear() && visibleMonth.getMonth() === currentMonth.getMonth();

      days.querySelectorAll("[data-date]").forEach((button) => {
        button.onclick = () => {
          selectedDate = fromDateKey(button.dataset.date);
          renderCalendar();
          renderSlots();
        };
      });
    }

    prev.onclick = () => {
      visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
      renderCalendar();
    };

    next.onclick = () => {
      visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
      renderCalendar();
    };

    renderCalendar();
    renderSlots();
  });
}

function leadCard(lead) {
  const leadType = lead.lead_type === "appointment" ? "Appointment" : lead.lead_type === "quote" ? "Quote" : "General";
  const appointment = [lead.preferred_date, lead.preferred_time].filter(Boolean).join(" at ");
  const contact = [lead.email, lead.phone].filter(Boolean).join(" · ");
  const source = [lead.page_path, lead.ad_group, lead.lead_source].filter(Boolean).join(" · ");
  const utm = Object.entries(lead.utm || {})
    .filter(([, value]) => value)
    .map(([key, value]) => `<span>${escapeHtml(key)}: ${escapeHtml(value)}</span>`)
    .join("");

  return `<article class="lead-card">
    <div class="lead-card-head">
      <div>
        <span class="lead-badge ${escapeHtml(lead.lead_type)}">${leadType}</span>
        <h3>${escapeHtml(lead.name)}</h3>
        <p>${escapeHtml(contact || "No contact details")}</p>
      </div>
      <small>${escapeHtml(formatLeadDate(lead.created_at))}</small>
    </div>
    <div class="lead-meta">
      <span><strong>Service</strong>${escapeHtml(lead.service || "-")}</span>
      <span><strong>Timeline</strong>${escapeHtml(lead.timeline || "-")}</span>
      <span><strong>Budget</strong>${escapeHtml(lead.budget || "-")}</span>
      ${appointment ? `<span><strong>Appointment</strong>${escapeHtml(appointment)}</span>` : ""}
    </div>
    ${lead.message ? `<p class="lead-message">${escapeHtml(lead.message)}</p>` : ""}
    ${source ? `<div class="lead-source"><strong>Source</strong><span>${escapeHtml(source)}</span></div>` : ""}
    ${utm ? `<div class="utm-row">${utm}</div>` : ""}
    <div class="lead-update">
      <select aria-label="Lead status" data-lead-status="${escapeHtml(lead.id)}">
        ${leadStatuses.map((status) => `<option value="${status}"${lead.status === status ? " selected" : ""}>${status}</option>`).join("")}
      </select>
      <textarea aria-label="Lead notes" data-lead-notes="${escapeHtml(lead.id)}" placeholder="Internal notes">${escapeHtml(lead.notes || "")}</textarea>
      <button type="button" class="btn dark compact" data-save-lead="${escapeHtml(lead.id)}">Save</button>
    </div>
  </article>`;
}

function bindAdmin() {
  const dashboard = document.querySelector("[data-admin-dashboard]");
  if (!dashboard) return;

  const list = dashboard.querySelector("[data-admin-list]");
  const statusBox = dashboard.querySelector("[data-admin-status]");
  const pinInput = dashboard.querySelector("[data-admin-pin]");
  const refresh = dashboard.querySelector("[data-admin-refresh]");
  let activeFilter = "all";

  pinInput.value = localStorage.getItem("jstAdminPin") || "";

  function adminHeaders(includeJson = false) {
    const headers = includeJson ? { "Content-Type": "application/json" } : {};
    const pin = pinInput.value.trim();
    if (pin) headers["X-Admin-Pin"] = pin;
    return headers;
  }

  function setAdminStatus(message, tone = "") {
    statusBox.textContent = message;
    statusBox.dataset.tone = tone;
  }

  function updateSummary(summary = {}) {
    dashboard.querySelectorAll("[data-admin-count]").forEach((item) => {
      item.textContent = summary[item.dataset.adminCount] || 0;
    });
  }

  function bindLeadUpdates() {
    list.querySelectorAll("[data-save-lead]").forEach((button) => {
      button.onclick = async () => {
        const id = button.dataset.saveLead;
        const status = list.querySelector(`[data-lead-status="${id}"]`).value;
        const notes = list.querySelector(`[data-lead-notes="${id}"]`).value;
        button.disabled = true;
        setAdminStatus("Saving lead...");

        try {
          const response = await fetch(`/api/leads/${encodeURIComponent(id)}`, {
            method: "PATCH",
            headers: adminHeaders(true),
            body: JSON.stringify({ status, notes })
          });
          const result = await parseApiResponse(response);
          if (!response.ok) throw new Error(result.error || "Unable to update this lead.");
          setAdminStatus("Lead updated.", "success");
          await loadLeads();
        } catch (error) {
          setAdminStatus(error.message, "error");
        } finally {
          button.disabled = false;
        }
      };
    });
  }

  async function loadLeads() {
    setAdminStatus("Loading leads...");
    list.innerHTML = "";

    try {
      const query = activeFilter === "all" ? "" : `?type=${encodeURIComponent(activeFilter)}`;
      const response = await fetch(`/api/leads${query}`, { headers: adminHeaders() });
      const result = await parseApiResponse(response);
      if (!response.ok) throw new Error(result.error || "Unable to load leads.");

      updateSummary(result.summary || {});
      list.innerHTML = result.leads && result.leads.length
        ? result.leads.map(leadCard).join("")
        : `<div class="empty-state">No leads found for this filter yet.</div>`;

      const securityNote = result.admin_pin_enabled ? "" : " ADMIN_PIN is not set, so this local dashboard is open on this server.";
      setAdminStatus(`${(result.leads || []).length} lead${(result.leads || []).length === 1 ? "" : "s"} shown.${securityNote}`, result.admin_pin_enabled ? "success" : "warning");
      bindLeadUpdates();
    } catch (error) {
      updateSummary({});
      list.innerHTML = `<div class="empty-state">Backend API is unavailable. Start the Node server with npm run dev, then open /admin again.</div>`;
      setAdminStatus(error.message, "error");
    }
  }

  dashboard.querySelectorAll("[data-admin-filter]").forEach((button) => {
    button.onclick = () => {
      activeFilter = button.dataset.adminFilter;
      dashboard.querySelectorAll("[data-admin-filter]").forEach((item) => item.classList.toggle("active", item === button));
      loadLeads();
    };
  });

  pinInput.onchange = () => {
    localStorage.setItem("jstAdminPin", pinInput.value.trim());
    loadLeads();
  };

  pinInput.onkeydown = (event) => {
    if (event.key === "Enter") {
      localStorage.setItem("jstAdminPin", pinInput.value.trim());
      loadLeads();
    }
  };

  refresh.onclick = loadLeads;
  loadLeads();
}

function render() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  readLeadContext();

  if (path === "/") app.innerHTML = home();
  else if (/^\/(men|women)\//.test(path)) {
    const [, gender, category] = path.split("/");
    app.innerHTML = catalog(gender, category);
  } else if (path === "/ads") app.innerHTML = adsHub();
  else if (/^\/ads\//.test(path)) app.innerHTML = adLanding(path.split("/")[2]);
  else if (path === "/admin") app.innerHTML = adminPage();
  else app.innerHTML = standard(path);

  bind();
  window.scrollTo(0, 0);
  trackConversion("page_view", { value: 0 });
  if (currentAdGroupSlug()) trackConversion("ad_landing_view", { value: 0 });
}

function bind() {
  bindScheduler();
  bindAdmin();

  document.querySelectorAll("[data-link]").forEach((anchor) => {
    anchor.onclick = (event) => {
      const url = new URL(anchor.href);
      if (url.origin === location.origin) {
        event.preventDefault();
        const goal = anchor.dataset.goal;
        if (goal) trackConversion(goal, { link_text: anchor.textContent.trim(), value: 1 });
        history.pushState({}, "", url.pathname + url.search);
        render();
        closeDrawer();
      }
    };
  });

  document.querySelectorAll("a[data-goal]:not([data-link])").forEach((anchor) => {
    anchor.onclick = () => {
      trackConversion(anchor.dataset.goal, { link_url: anchor.href, link_text: anchor.textContent.trim(), value: 1 });
    };
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.onsubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const service = data.get("service") || form.dataset.defaultService || "Lead enquiry";
      const leadType = form.dataset.leadType || "general";
      const preferredDate = data.get("preferred_date") || "";
      const preferredTime = data.get("preferred_time") || "";
      const context = readLeadContext();
      const notice = form.querySelector(".notice");
      const submit = form.querySelector("button[type='submit']");
      const payload = {
        ...Object.fromEntries(data.entries()),
        service: String(service),
        lead_type: leadType,
        preferred_date: String(preferredDate),
        preferred_time: String(preferredTime),
        page_path: location.pathname,
        ad_group: currentAdGroupSlug() || context.ad_group || "",
        utm: context,
        referrer: document.referrer || ""
      };
      const leadDetails = {
        service,
        lead_type: leadType,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        ad_group: payload.ad_group
      };

      if (leadType === "appointment" && (!preferredDate || !preferredTime)) {
        notice.textContent = "Please select an appointment date and time first.";
        notice.dataset.tone = "error";
        notice.classList.add("show");
        return;
      }

      submit.disabled = true;
      notice.textContent = "Saving your enquiry...";
      notice.dataset.tone = "";
      notice.classList.add("show");

      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await parseApiResponse(response);
        if (!response.ok) throw new Error(result.error || "Unable to save this enquiry.");

        const savedDetails = { ...leadDetails, lead_id: result.lead && result.lead.id };
        notice.textContent = leadType === "appointment"
          ? "Thank you. Your appointment request has been saved. Please also message us on WhatsApp for the fastest confirmation."
          : "Thank you. Your enquiry has been saved. Please also message us on WhatsApp for the fastest reply.";
        notice.dataset.tone = "success";

        trackConversion("lead_form_submit", { ...savedDetails, value: 5 });
        if (leadType === "appointment") trackConversion("appointment_form_submit", { ...savedDetails, value: 8 });
        if (leadType === "quote") trackConversion("quote_form_submit", { ...savedDetails, value: 6 });
        if (leadType === "general") trackConversion("general_form_submit", { ...savedDetails, value: 4 });
        if (/appointment|wedding|express|fitting/i.test(service)) trackConversion("appointment_request", { ...savedDetails, value: 5 });
        if (/quote|shirt|ladies|shipping|reorder|suit/i.test(service)) trackConversion("quote_request", { ...savedDetails, value: 5 });
        if (/wedding|groom|group/i.test(service)) trackConversion("wedding_lead", { ...savedDetails, value: 8 });
        if (/remote|shipping|reorder|measurement/i.test(service)) trackConversion("remote_order_lead", { ...savedDetails, value: 6 });
      } catch (error) {
        notice.textContent = `${error.message} Please call or WhatsApp the shop if this keeps happening.`;
        notice.dataset.tone = "error";
      } finally {
        submit.disabled = false;
      }
    };
  }
}

const drawer = document.querySelector(".drawer");
const scrim = document.querySelector(".scrim");

function closeDrawer() {
  drawer.classList.remove("open");
  scrim.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

document.querySelector(".menu-btn").onclick = () => {
  drawer.classList.add("open");
  scrim.classList.add("show");
  document.body.classList.add("no-scroll");
};

document.querySelector(".close-menu").onclick = closeDrawer;
scrim.onclick = closeDrawer;
addEventListener("popstate", render);

setupGoogleAds();
render();
