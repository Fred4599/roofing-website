# Treasure Valley Roofing & Siding Website

A production-ready Astro website for a residential roofing and siding company based in Boise, Idaho. Built with a focus on local SEO, fast performance, and conversion optimization.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── SEO.astro       # SEO meta tags, Open Graph, Schema.org
│   ├── Header.astro    # Site navigation
│   ├── Footer.astro    # Footer with links and NAP info
│   ├── CTASection.astro
│   ├── ServiceCards.astro
│   ├── CityGrid.astro
│   ├── FAQ.astro
│   ├── ReviewHighlights.astro
│   ├── HeroSection.astro
│   ├── HowItWorks.astro
│   ├── ContactForm.astro
│   ├── TrustBadges.astro
│   └── ProjectGalleryPlaceholder.astro
├── config/
│   └── site.ts         # ⭐ Company details & site configuration
├── content/
│   ├── config.ts       # Content collection schemas
│   └── blog/           # Blog posts (Markdown)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro     # Home page
│   ├── about.astro
│   ├── contact.astro
│   ├── reviews.astro
│   ├── gallery.astro
│   ├── financing.astro
│   ├── warranties.astro
│   ├── faqs.astro
│   ├── roofing.astro          # Service hub
│   ├── roof-replacement.astro # Money page
│   ├── roof-repair.astro
│   ├── new-roof-installation.astro
│   ├── metal-roofing.astro
│   ├── storm-damage-roof-repair.astro
│   ├── insurance-roof-claims.astro
│   ├── siding.astro           # Service hub
│   ├── siding-installation.astro
│   ├── vinyl-siding.astro
│   ├── fiber-cement-siding.astro
│   ├── wood-siding.astro
│   ├── siding-repair.astro
│   ├── locations/             # Local SEO pages
│   │   ├── boise-id.astro
│   │   ├── meridian-id.astro
│   │   ├── eagle-id.astro
│   │   └── garden-city-id.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
public/
├── robots.txt
├── favicon.svg
└── images/
    ├── logo-placeholder.svg
    └── og-default.jpg      # Replace with real image
```

## Customization Guide

### 1. Update Company Information

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  siteName: 'Your Company Name',
  siteUrl: 'https://yoursite.com',
  phone: '(208) 555-0199',
  email: 'info@yoursite.com',
  address: {
    street: '123 Main Street',
    city: 'Boise',
    state: 'Idaho',
    zip: '83702',
    full: '123 Main Street, Boise, Idaho 83702',
  },
  // ... other settings
};
```

### 2. Update Service Areas

In `src/config/site.ts`, modify the `serviceAreas` array:

```typescript
serviceAreas: [
  { name: 'Boise', slug: 'boise-id', state: 'ID' },
  { name: 'Meridian', slug: 'meridian-id', state: 'ID' },
  // Add or remove cities as needed
],
```

### 3. Add Real Images

Replace placeholder images:

- `public/favicon.svg` - Site favicon
- `public/images/logo-placeholder.svg` - Company logo
- `public/images/og-default.jpg` - Social sharing image (1200x630px)

For page images, use Astro's `<Image>` component in your components.

### 4. Add Blog Posts

Create new `.md` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description for SEO"
pubDate: 2024-03-01
category: roofing
tags: ["tag1", "tag2"]
---

Your content here...
```

### 5. Update Reviews

Edit the reviews in `src/components/ReviewHighlights.astro` or create a data file.

## SEO Features

- **Unique titles and descriptions** on every page
- **Canonical URLs** for all pages
- **OpenGraph and Twitter Cards** for social sharing
- **Schema.org JSON-LD** markup:
  - LocalBusiness/RoofingContractor (site-wide)
  - Service schema (service pages)
  - FAQPage schema (FAQ sections)
  - AggregateRating (reviews)
  - Article (blog posts)
- **Geo meta tags** for local SEO
- **Sitemap** auto-generated via @astrojs/sitemap
- **robots.txt** included

## Performance

- Static site generation (SSG)
- Minimal JavaScript
- CSS scoped to components
- Optimized fonts with preconnect
- Semantic HTML structure
- Accessible navigation

## Internal Linking Strategy

- Service hub pages (`/roofing`, `/siding`) link to all child services
- Each service page links to:
  - Related services
  - Location pages
  - Money page (roof replacement)
- Location pages link to all main services
- Footer includes comprehensive site links
- CTAs point to contact and phone

## Environment Variables

Optional: Set `SITE_URL` for production builds:

```bash
SITE_URL=https://yoursite.com npm run build
```

If not set, defaults to the value in `astro.config.mjs`.

## Deployment

Build the site and deploy the `dist/` folder to any static host:

- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server

```bash
npm run build
# Deploy contents of dist/ folder
```

## Adding Pages

### New Service Page

1. Create the page in `src/pages/`
2. Add to navigation in `src/components/Header.astro`
3. Add to footer links in `src/components/Footer.astro`
4. Link from relevant service hub page

### New Location Page

1. Add to `serviceAreas` in `src/config/site.ts`
2. Create page in `src/pages/locations/`
3. Navigation auto-updates from config

## Tech Stack

- **Astro** v4.x - Static site generator
- **TypeScript** - Type safety
- **Plain CSS** - Scoped component styles
- **@astrojs/sitemap** - Sitemap generation

## License

This is a template. Replace with your license.

---

Built for local SEO and conversions. Good luck with your roofing business!
