# Sunrise Academy — Starter Website

This repository contains a responsive static website starter for a school. It uses plain HTML, CSS, and a small JavaScript file for navigation and the contact form.

## Included files
- index.html — Home
- about.html, admissions.html, academics.html, staff.html, calendar.html, contact.html
- assets/styles.css — Styles
- assets/script.js — JavaScript (mobile nav + contact handler)

## Quick setup (locally)
1. Save the files preserving the folder structure.
2. Open `index.html` in a browser to preview.

## Customization
- Replace "Sunrise Academy" and text content with your school's name and copy.
- Replace contact email/phone in pages with real contact info.
- Replace placeholder images/avatars by adding files in `assets/` and update `<img>` tags (currently avatars are text-based).
- Update `calendar.html` iframe `src` with your public Google Calendar embed URL.
- For the contact form: replace the `action` attribute in `contact.html` with your Formspree endpoint (`https://formspree.io/f/YOUR_FORM_ID`) or another server endpoint.

## Deployment
Option A — GitHub Pages (free)
1. Create a new repository and push these files to the main branch.
2. In the repo Settings → Pages, set the source to the branch (e.g., `main`) and folder `/ (root)`.
3. Your site will be available at `https://<username>.github.io/<repo>/` or a custom domain you set.

Option B — Netlify
1. Create a Netlify account and connect your GitHub repo, or drag & drop the site folder in the Netlify UI.
2. Set build command: (none) and publish directory: `/`.
3. Deploy — Netlify will give you a URL and supports custom domains and HTTPS.

## Accessibility & SEO
- Add proper alt text for images.
- Set page-specific meta description and titles (currently basic).
- Consider adding sitemap.xml and robots.txt for SEO.

## Next steps I can do for you (pick one)
- Replace placeholder text/colors/logo with your provided assets and copy.
- Push this to a GitHub repo and enable GitHub Pages (tell me owner/repo or give me permission).
- Add a small CMS integration (Netlify CMS) so non-technical staff can edit content.
- Convert to a single-page React site or Next.js app if you want dynamic features.

If you want me to push these files to a GitHub repository for you, give me the repo `owner/name` and confirm which branch to use (or say "use defaults" to push to the repo's default branch).
