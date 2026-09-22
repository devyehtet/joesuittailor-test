# Joe Suit Tailor Website

Tailor shop website with a small Node backend for lead and appointment capture.

## Run Locally

```bash
npm run dev
```

Open the URL shown in Terminal. Default is `http://127.0.0.1:4173`. If the port is busy, the server will try the next port.

The backend API runs from the same command.

## Files

- `dist/index.html` - Header, menu, footer, SEO metadata, Google Ads config placeholder
- `dist/styles.css` - Layout, responsive design, service cards, lead forms, ad landing pages
- `dist/app.js` - Page content, routes, products, conversion tracking, ad group landing pages
- `dist/assets/` - Website images
- `server.mjs` - Static web server plus lead/appointment API
- `data/leads.json` - Local lead storage created by the server and ignored by Git

## Public Pages

- `/`
- `/services`
- `/book-appointment`
- `/request-quote`
- `/men/suits`, `/men/shirts`, `/men/tuxedos`, `/men/jackets`, `/men/pants`, `/men/vests`
- `/women/suits`, `/women/blouses`, `/women/dresses`, `/women/coats`
- `/custom-made`, `/wedding`, `/fabrics`, `/packages`
- `/gallery`, `/journal`, `/measurements`, `/faq`, `/about`, `/contact`
- `/admin` - Lead and appointment dashboard

## Google Ads Landing Pages

Use these as final URLs when splitting ad groups:

- `/ads/bespoke-suits-bangkok`
- `/ads/wedding-suits-bangkok`
- `/ads/custom-shirts-bangkok`
- `/ads/ladies-tailoring-bangkok`
- `/ads/express-tailoring-bangkok`

Example final URL:

```text
https://your-domain.com/ads/bespoke-suits-bangkok?utm_source=google&utm_medium=cpc&utm_campaign=bespoke_suits&utm_adgroup=suits&utm_term={keyword}
```

The site stores UTM, `gclid`, `gbraid`, and `wbraid` values in the browser session, then attaches them to conversion events.

## Recommended Google Ads Conversion Goals

Primary goals:

- `lead_form_submit` - contact form submitted
- `appointment_form_submit` - dedicated appointment form submitted
- `quote_form_submit` - dedicated quote form submitted
- `whatsapp_click` - WhatsApp button clicked
- `phone_call` - phone link clicked
- `appointment_request` - appointment CTA or appointment service submitted
- `quote_request` - quote/package CTA or quote service submitted
- `wedding_lead` - wedding or groom/group lead submitted
- `remote_order_lead` - remote reorder, shipping or measurement lead submitted

Secondary / observation goals:

- `measurement_start` - measurement guide/order CTA clicked
- `ad_landing_view` - visitor opened an ad-group landing page
- `page_view` - basic page view event

## Add Google Ads Conversion IDs

After creating conversion actions in Google Ads, update both `dist/index.html` and `dist/404.html`:

```js
window.JST_ADS_CONFIG = {
  googleAdsId: "AW-XXXXXXXXXX",
  conversionLabels: {
    lead_form_submit: "FORM_LABEL",
    appointment_request: "APPOINTMENT_LABEL",
    quote_request: "QUOTE_LABEL",
    whatsapp_click: "WHATSAPP_LABEL",
    phone_call: "PHONE_LABEL",
    measurement_start: "MEASUREMENT_LABEL",
    ad_landing_view: "LANDING_VIEW_LABEL",
    appointment_form_submit: "APPOINTMENT_FORM_LABEL",
    quote_form_submit: "QUOTE_FORM_LABEL",
    general_form_submit: "GENERAL_FORM_LABEL",
    wedding_lead: "WEDDING_LABEL",
    remote_order_lead: "REMOTE_LABEL"
  }
};
```

Leave any label empty if you do not want that event sent as a Google Ads conversion yet. The event will still be pushed to `dataLayer` for GTM/GA4 use.

## Add More Ad Groups

In `dist/app.js`, copy one item inside the `adGroups` object and change:

- slug, e.g. `"alterations-bangkok"`
- `title`
- `service`
- `audience`
- `promise`
- `keywords`
- `negatives`
- `goal`

Then the new page will work at:

```text
/ads/your-new-slug
```

## Lead Form Split

Lead forms are separated by customer intent:

- `/book-appointment` - appointment leads with a calendar date picker and time slot selection
- `/request-quote` - quote leads for garments, packages and delivery questions
- `/contact` - general enquiry page that routes customers to the right form

Every form still fires `lead_form_submit`, but the dedicated forms also fire `appointment_form_submit` or `quote_form_submit` so Google Ads, GTM, GA4 or a CRM can report them separately.

## Backend Lead Storage

Lead and appointment forms submit to:

```text
POST /api/leads
```

The server saves records into `data/leads.json`. Each lead includes:

- contact details
- lead type: `appointment`, `quote`, or `general`
- appointment date and time when selected
- service, timeline, budget and message
- page path, ad group and UTM/GCLID context
- follow-up status and internal notes

## Admin Dashboard

Open:

```text
http://127.0.0.1:4173/admin
```

The dashboard lets you:

- view all leads
- filter appointments, quotes and general enquiries
- see Google Ads/UTM source data
- update lead status: `new`, `contacted`, `booked`, `closed`
- save internal notes

For production or any shared server, start the server with an admin PIN:

```bash
ADMIN_PIN=change-this-pin npm run dev
```

Then enter that PIN on `/admin`. Without `ADMIN_PIN`, the dashboard is open to anyone who can reach the Node server.

## Important

The backend only runs on a Node server. GitHub can store the code, but GitHub Pages cannot run `server.mjs` or save `data/leads.json`. Deploy to a Node-capable host such as Render, Railway, Fly.io, a VPS, or another server if you need live lead capture online.
