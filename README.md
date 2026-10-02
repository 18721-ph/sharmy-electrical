# Sharmy Electro System

A fresh React + TypeScript + Tailwind website with React Router and Lucide icons. No previous website code or copy was reused.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Validation

`npm run build` passes TypeScript and production bundling. Run `npx playwright test` to repeat the browser checks using the installed Microsoft Edge browser. All five tests passed: nine routes at 320, 375, 430, 768, 1024, 1440, and 1920 pixels; mobile navigation and Escape behavior; gallery dialog focus restoration; form validation, service selection, email draft, and download; desktop/mobile screenshots. No horizontal overflow or page runtime errors were detected. Screenshots are saved in `test-results/`.

The local review server is at `http://localhost:5174/` during this session. The test configuration uses port 5174 because 5173 was already occupied.

On Windows PowerShell with script execution disabled, use `npm.cmd`.

## Content

Verified name, phone, email, and three service categories come from the screenshots supplied by the user. All business data lives in `src/data/company.ts`. See `CONTENT-INVENTORY.md` for sources and missing details.

The version 2 visuals use detailed AI-generated architectural, electrical, and mechanical concept imagery. Every image is labeled as an AI concept, not completed company work. Responsive WebP variants, descriptive alt text, explicit dimensions, hero fetch priority, and lazy loading below the fold are implemented. Originals and optimized files are in `public/images/`; the full generation prompts and provenance are in `IMAGE-PROMPTS.md`. No fabricated testimonials, certifications, addresses, or statistics are included.

The accessible enquiry form validates required fields, prepares a message for the verified email address, and offers a text download. The visitor must send it from their email app; the website does not claim backend delivery. Contact details are not persisted by the site. WhatsApp is omitted until confirmed.

## Deployment

Configure the host to rewrite application routes to `index.html` so direct navigation to `/about`, `/services/electrical`, etc. works. A Netlify-compatible `_redirects` file is provided. On other hosts configure equivalent SPA fallback rules.

Set `VITE_SITE_URL` to the approved deployed origin for canonical URLs. Review company copy and supply missing project photography before removing the `noindex,nofollow` meta tag in `index.html`. The supplied source domain has not been assumed to be the deployment destination.

Design uses system font fallbacks so it works without third-party font requests. Motion honors reduced-motion preferences. The mobile navigation supports Escape, and project dialogs use native modal keyboard containment and return focus to their triggers.
