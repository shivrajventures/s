# Shivraj Ventures — Website

A complete multi-page personal/business website for **Shivam Bharti** (Shivraj Ventures), modelled after the Saddam Kassim layout — fully responsive, SEO-optimised, and easy to maintain.

---

## 📁 Project Structure

```
shivraj-website/
│
├── index.html               ← Homepage
├── sitemap.xml              ← SEO sitemap
├── robots.txt               ← SEO robots file
│
├── css/
│   ├── global.css           ← CSS variables, reset, utility classes, buttons
│   ├── nav-footer.css       ← Navbar + Footer styles
│   ├── home.css             ← Homepage-specific styles (hero, cards, reviews)
│   └── pages.css            ← All inner page styles (about, services, portfolio…)
│
├── js/
│   └── components.js        ← Shared JS: renderNavbar(), renderFooter(),
│                               FAQ accordion, portfolio filter, contact form
│
└── pages/
    ├── about.html           ← About / Journey timeline
    ├── services.html        ← Services (6 service cards)
    ├── courses.html         ← Courses catalog + SEO content
    ├── portfolio.html       ← Portfolio with category filter
    ├── tools.html           ← Tools & Resources
    ├── contact.html         ← Contact form + info
    ├── faq.html             ← FAQ accordion
    ├── disclaimer.html      ← Disclaimer
    ├── privacy.html         ← Privacy Policy
    ├── terms.html           ← Terms & Conditions
    └── refund.html          ← Refund Policy
```

---

## 🚀 How to Run Locally

Just open `index.html` in any browser — no build step required.

```bash
# Option 1: Double-click index.html in your file manager

# Option 2: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3: Python simple server
cd shivraj-website
python3 -m http.server 3000
# Then open http://localhost:3000
```

---

## 🌐 How to Deploy

### GitHub Pages (Free)
1. Push the entire folder to a GitHub repository
2. Go to Settings → Pages → Source: `main` branch, root `/`
3. Your site will be live at `https://yourusername.github.io/shivraj-website`

### Hostinger / cPanel Hosting
1. Log into your hosting control panel
2. Open File Manager → `public_html`
3. Upload all files (keeping the folder structure)
4. Make sure `index.html` is in the root of `public_html`

### Netlify (Free, Recommended)
1. Drag and drop the `shivraj-website` folder onto netlify.com/drop
2. Your site is live instantly with a free URL
3. Connect a custom domain in Settings

---

## ✏️ How to Make Common Changes

### Change your name / brand
- Open `js/components.js`
- Find `SHIVRAJ VENTURES` and `Shivam Bharti` → replace with your brand name
- This updates the logo and footer across all pages automatically

### Change contact email / WhatsApp
- Open `js/components.js`
- Search for `shivambhartiofficial@gmail.com` → replace with your email
- Search for `918808913837` → replace with your WhatsApp number (country code + number, no +)

### Change colors / fonts
- Open `css/global.css`
- Edit the `:root` CSS variables at the top:
  ```css
  --color-primary: #3b5bdb;   /* Main blue → change to your brand color */
  --font-heading: 'Sora';     /* Heading font */
  --font-body: 'Plus Jakarta Sans'; /* Body font */
  ```

### Add a new portfolio project
- Open `pages/portfolio.html`
- Copy an existing `.portfolio-card` block and update the content
- Set the correct `data-category` attribute (`ecommerce`, `business`, `realestate`, `travel`, `education`)

### Add a new course
- Open `pages/courses.html`
- Copy an existing `.course-full-card` block and update with new course details

### Update the hero stats on Homepage
- Open `index.html`
- Find the `.hero__stats` section and update the numbers

---

## 🔍 SEO Checklist

- [x] Unique `<title>` and `<meta name="description">` on every page
- [x] `<meta name="keywords">` with relevant keywords
- [x] `<link rel="canonical">` on every page
- [x] `sitemap.xml` with all pages
- [x] `robots.txt` pointing to sitemap
- [x] Semantic HTML (`<main>`, `<nav>`, `<footer>`, `<section>`, `<h1>`–`<h3>`)
- [x] Open Graph meta tags on homepage
- [x] Google Fonts loaded via CSS import
- [x] Mobile responsive across all breakpoints (320px → 1440px)
- [ ] Update canonical URLs from `shivrajventures.com` to your real domain
- [ ] Add Google Analytics / Search Console script
- [ ] Add a real favicon (replace with your logo)

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 480px | Single column, stacked |
| 480px – 768px | 2-column grids |
| 768px – 960px | 2-column grids, desktop nav hidden |
| > 960px | Full 3-column grids, desktop nav |

---

## 🛠️ Tech Stack

- Pure HTML5, CSS3, Vanilla JS — zero dependencies, zero build step
- Google Fonts (Sora + Plus Jakarta Sans) via CDN
- CSS Custom Properties for easy theming
- Shared component rendering via `components.js` (renderNavbar, renderFooter)

---

## 📞 Contact

**Shivam Bharti**
- 📧 shivambhartiofficial@gmail.com
- 📞 +91 88089 13837
- 🌐 shivrajventures.com
- 📍 Lucknow, Uttar Pradesh, India
