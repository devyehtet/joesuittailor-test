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
  { name: "Essential Business", items: "1 suit + 2 shirts", bestFor: "First-time clients, interviews and office wardrobes", goal: "quote_request" },
  { name: "Executive Rotation", items: "2 suits + 4 shirts", bestFor: "Weekly business wear with mix-and-match fabric planning", goal: "quote_request" },
  { name: "Wedding Party", items: "Groom suit or tuxedo + shirts + group coordination", bestFor: "Destination weddings and coordinated formal looks", goal: "appointment_request" },
  { name: "Travel Wardrobe", items: "Jacket + trousers + shirts", bestFor: "Lightweight cloth, easy packing and warm-weather comfort", goal: "quote_request" }
];

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
  return `<section class="lead-strip"><span>Need a fitting in Bangkok?</span><strong>${shop.hours}</strong><div>${phoneLink("Call")} ${whatsappLink("WhatsApp")} ${btn("/contact", "Book", "dark compact", "appointment_request")}</div></section>`;
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
  return `<div class="package-grid">${packages.map((item) => `
    <article class="package-card">
      <span class="eyebrow">Package</span>
      <h3>${item.name}</h3>
      <strong>${item.items}</strong>
      <p>${item.bestFor}</p>
      ${btn("/contact", "Request Quote", "dark", item.goal, `data-service="${item.name}"`)}
    </article>
  `).join("")}</div>`;
}

function leadForm(defaultService = "Book an appointment") {
  const context = readLeadContext();
  const source = [context.utm_campaign, context.utm_adgroup || context.ad_group, context.utm_term].filter(Boolean).join(" / ");
  const serviceOptions = ["Book an appointment", "Request a suit quote", "Wedding tailoring", "Custom shirts", "Ladies tailoring", "Express fitting", "Worldwide shipping"];
  if (!serviceOptions.includes(defaultService)) serviceOptions.unshift(defaultService);

  return `<form class="form lead-form" id="contact-form" data-default-service="${defaultService}">
    <div class="field-grid">
      <input name="name" required placeholder="Your name">
      <input name="email" type="email" required placeholder="Email">
      <input name="phone" required placeholder="Phone / WhatsApp">
      <select name="service" aria-label="Service">
        ${serviceOptions.map((service) => `<option${service === defaultService ? " selected" : ""}>${service}</option>`).join("")}
      </select>
      <select name="timeline" aria-label="Timeline">
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
    <textarea name="message" placeholder="Tell us what you need, your travel dates, or how many garments you want."></textarea>
    <input type="hidden" name="lead_source" value="${source}">
    <button class="btn dark" type="submit">SEND ENQUIRY</button>
    <div class="notice">Thank you. Your enquiry is ready. Please also message us on WhatsApp for the fastest reply.</div>
  </form>`;
}

function conversionPanel(defaultService = "Book an appointment") {
  return `<div class="conversion-panel">
    <div>
      <span class="eyebrow">Fastest Response</span>
      <h2>Book your fitting or request a quote</h2>
      <p>Share your garment type, travel dates and phone number. The tailoring team can confirm fabric options, fitting timing and delivery choices.</p>
      <div class="quick-actions">
        ${btn(shop.whatsapp, "WhatsApp Now", "gold", "whatsapp_click")}
        ${btn(shop.phoneHref, "Call Shop", "dark", "phone_call")}
      </div>
    </div>
    ${leadForm(defaultService)}
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
      <div class="actions">${btn("/contact", "Book Appointment", "gold", "appointment_request")}${btn("/men/suits", "Browse Suits", "", "quote_request")}</div>
    </div>
  </section>
  ${leadBar()}
  ${trustStrip()}
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
  <section class="section alt"><div class="section-head"><span class="eyebrow">Packages</span><h2 class="section-title">Useful starting points for quotes</h2><p>Use these package paths for Google Ads sitelinks, quote forms and consultation planning.</p></div>${packageGrid()}</section>
  <section class="split"><div class="split-copy"><span class="eyebrow">Bespoke For Her</span><h2>Women's Clothing</h2><p>Suits, dresses, blouses and coats, meticulously tailored to celebrate your silhouette.</p><div class="actions" style="justify-content:flex-start">${btn("/women/suits", "Browse Women's Wear", "dark", "quote_request")}</div></div><img src="${img(assets.women)}" alt="Women's bespoke tailoring"></section>
  <section class="section world"><div class="section-head"><span class="eyebrow">Worldwide Delivery</span><h2 class="section-title">Tailored in Bangkok.<br>Delivered Globally.</h2><p>Secure, tracked, fully insured express delivery to over 200 countries.</p></div><div class="features"><div><h3>EXPRESS AIR</h3><p>DHL and FedEx door-to-door.</p></div><div><h3>FULLY INSURED</h3><p>Tracked end-to-end.</p></div><div><h3>REORDER READY</h3><p>Saved measurements for future garments.</p></div></div><div class="actions">${btn("/contact", "Get Shipping Quote", "gold", "quote_request")}</div></section>
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
    <div class="product-grid">${filtered.map((product) => `<article class="card"><img loading="lazy" src="${img(product.image)}" alt="${product.name}"><div class="card-body"><span class="eyebrow">${product.label}</span><h3>${product.name}</h3><p>${product.detail}</p><a href="/contact" data-link data-goal="quote_request">ENQUIRE</a></div></article>`).join("")}</div>
  </section>
  <section class="section alt">${conversionPanel(category === "shirts" ? "Custom shirts" : gender === "women" ? "Ladies tailoring" : "Request a suit quote")}</section>`;
}

function standard(path) {
  const pages = {
    "/about": ["OUR STORY", "Since 2000", assets.atelier, "For more than two decades, Joe Suit Tailor has created bespoke clothing for visitors and Bangkok residents. Our process combines careful consultation, precise measurement, hand-cut patterns and multiple fittings.", "Crafted in Bangkok", "Every garment is made by experienced tailors using carefully selected cloth, thoughtful construction and finishing that rewards close inspection."],
    "/services": ["TAILOR SHOP SERVICES", "Suits, shirts, weddings and reorders", assets.tailor, "Choose a service path and send an enquiry. Each service page is designed to work as a Google Ads destination, organic page or WhatsApp follow-up link.", "Services", ""],
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

  if (path === "/services") {
    body = `${serviceGrid()}<div class="spacer"></div>${conversionPanel("Book an appointment")}`;
  } else if (path === "/packages") {
    body = `${packageGrid()}<div class="spacer"></div>${conversionPanel("Request a suit quote")}`;
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
    body = `<div class="measure-grid"><img src="${img("measure-men-diagram-_LcHyY6J.jpg")}" alt="Men measurement guide"><img src="${img("measure-women-diagram-zf_pA9Gv.jpg")}" alt="Women measurement guide"></div><div class="actions">${btn("/contact", "Start Measurement Order", "dark", "measurement_start")}</div>`;
  } else if (path === "/contact") {
    body = `<div class="contact-grid"><div><h3>${shop.name}</h3><p>${shop.address}<br>${shop.hours}</p><p>${phoneLink()}<br>${whatsappLink("Chat on WhatsApp")}</p><div class="lead-context"><span class="eyebrow">Fitting Support</span><p>Send your travel dates, garment type and phone number so the team can suggest a realistic fitting schedule.</p></div></div>${leadForm("Book an appointment")}</div>`;
  } else {
    body = `<h2>${p[4]}</h2><p>${p[5]}</p><div class="actions" style="justify-content:flex-start">${btn("/contact", "Book Appointment", "dark", "appointment_request")}</div>`;
  }

  return `${pageHero(p[0], p[1], p[2])}${leadBar()}<section class="section"><div class="content"><span class="eyebrow">Joe Suit Tailor - Bangkok</span><h2>${p[0]}</h2><p>${p[3]}</p>${body}</div></section>`;
}

function adLanding(slug) {
  const group = adGroups[slug] || adGroups["bespoke-suits-bangkok"];
  return `<section class="hero ad-hero" style="background-image:url('${img(group.hero)}')">
    <div class="hero-copy">
      <span class="eyebrow">${group.eyebrow}</span>
      <h1>${group.title}</h1>
      <p>${group.promise}</p>
      <div class="actions">${btn("/contact", "Book Fitting", "gold", "appointment_request", `data-service="${group.service}"`)}${btn(shop.whatsapp, "WhatsApp Quote", "", "whatsapp_click")}</div>
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
      ${conversionPanel(group.service)}
    </div>
  </section>
  <section class="section alt">
    <div class="section-head"><span class="eyebrow">Ad Group Support</span><h2 class="section-title">Useful keyword direction</h2><p>Use this landing page as the final URL for one focused ad group. Keep ad copy, keywords and form service aligned.</p></div>
    <div class="ad-support">
      <article><h3>Suggested Keywords</h3><p>${group.keywords.join(", ")}</p></article>
      <article><h3>Negative Keywords</h3><p>${group.negatives.join(", ")}</p></article>
      <article><h3>Primary Goals</h3><p>${group.goal}, lead_form_submit, whatsapp_click, phone_call</p></article>
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

function render() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  readLeadContext();

  if (path === "/") app.innerHTML = home();
  else if (/^\/(men|women)\//.test(path)) {
    const [, gender, category] = path.split("/");
    app.innerHTML = catalog(gender, category);
  } else if (path === "/ads") app.innerHTML = adsHub();
  else if (/^\/ads\//.test(path)) app.innerHTML = adLanding(path.split("/")[2]);
  else app.innerHTML = standard(path);

  bind();
  window.scrollTo(0, 0);
  trackConversion("page_view", { value: 0 });
  if (currentAdGroupSlug()) trackConversion("ad_landing_view", { value: 0 });
}

function bind() {
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
    form.onsubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const service = data.get("service") || form.dataset.defaultService || "Lead enquiry";
      form.querySelector(".notice").classList.add("show");
      trackConversion("lead_form_submit", { service, value: 5 });
      if (/appointment|wedding|express/i.test(service)) trackConversion("appointment_request", { service, value: 5 });
      if (/quote|shirt|ladies|shipping/i.test(service)) trackConversion("quote_request", { service, value: 5 });
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
