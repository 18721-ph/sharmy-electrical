# Content inventory — 1 October 2026

## Verified information
- User subsequently requested a completely fresh design and copy, supplying two promotional screenshots as the factual reference.
- Company name: Sharmy Electro System.
- Telephone: +254 712 796 333.
- Email: Sharmyelectro@gmail.com.
- Service categories: electrical work, plumbing repairs, refrigeration.
- Website printed on the promotional image: https://sharmyelectrosystem.co.ke/index.html (not visited or copied).
- Existing logo: angular orange/navy symbol with Sharmy Electro System wordmark. Replaced by an original circuit/grid concept.
- The second screenshot contains the headings “Guaranteed Satisfaction” and “Quality”; small body text is unreadable. No specific guarantee terms have been inferred.
- The user describes an electrical services company requiring a replacement website.
- Supplied references: https://www.facebook.com/share/1eSZhotXMc/ and https://www.facebook.com/share/p/18M4vSvQf2/.
- The workspace contains no existing website, integrations, logo, or project assets.
- Both supplied Facebook URLs failed to load using the available browser; a direct request also failed. Their content has not been verified.

## Information not available
WhatsApp, physical location, coverage, hours, detailed service scope, company history, original project photographs/captions, testimonials, certifications, partner information, and documented operating process. The three service thumbnail images in the promotional composite cannot be verified as company project photographs, so they are not presented as completed work.

## Implementation plan and design system
1. Centralize all missing facts in src/data/company.ts with explicit placeholder status.
2. Build a responsive React/TypeScript/Tailwind site with reusable layout, icons, cards, gallery dialog, and form components.
3. Use charcoal navy (#142326), warm stone (#f5f3ed), copper (#cba775), and restrained gray. Use a system sans-serif stack, spacious editorial typography, hairline borders, and squared buttons.
4. Create a lightweight abstract circuit/grid logo with no invented company initials. The wordmark explicitly remains a placeholder.
5. Create every requested route. Use original SVG architectural concept artwork, explicitly labeled as illustration, until real photographs are supplied. Never represent illustrations as completed work.
6. Provide a validated email enquiry draft addressed to the verified business email, plus a downloadable copy. Explain that sending occurs in the visitor's email app; no backend submission is claimed.
7. Verify TypeScript, production build, routes, keyboard interactions, and responsive layouts when browser tooling is available.

## Before publication
Supply original project images, location/coverage, production URL confirmation, and approved operating process. Service detail pages currently provide enquiry guidance rather than asserting unverified technical capabilities. Set VITE_SITE_URL to the approved deployed origin to enable canonical URLs. Remove noindex after owner content review. The contact form intentionally uses the visitor's email app; a backend is optional future work. No WhatsApp link is included because a telephone number alone does not verify a WhatsApp account.

## Visual revision

At the user's request for more detailed, creative images, the simple SVG diagrams were replaced in the rendered site by three AI-generated concept studies: a detailed illuminated architectural cutaway, an electrical assembly, and a copper/steel mechanical study. These are explicitly labeled as AI concepts throughout and do not establish new business services or completed projects. Source prompts and asset paths are recorded in `IMAGE-PROMPTS.md`. The original SVG component is retained as source history.
