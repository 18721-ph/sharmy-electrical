# Sharmy upgrade — 17 October 2026

## Audit and implementation

Preserved React 19, TypeScript, Vite, React Router, Lucide, npm, all existing routes, shared navigation/footer, service content, concept gallery and native modal, SEO metadata, responsive assets, and email-draft delivery. No backend or new dependencies were introduced. No repository AGENTS.md was found.

The available favicon and existing wordmark use dark teal `#142326` and copper `#cba775`. These remain the working palette with paper `#f8f7f2`, muted text `#52625e`, and restrained borders. The historical inventory describes an orange/navy original logo, but that asset is absent: these are verified current website colours, not a claim of original corporate-logo matching. Shared refinements are in `src/refinements.css`, after the existing layout and mobile styles.

The implementation preserves the existing architecture, improves shared branding and homepage hierarchy, adds service imagery and selection, connects gallery previews to enquiries, and extracts the enquiry form into a dedicated component. No claims of completed work, qualifications, clients, or additional HVAC services were added.

## Reference limitation

https://ecoflowkenya.co.ke/ could not be inspected. The web tool reported it inaccessible; Microsoft Edge through Playwright reported 
et::ERR_NETWORK_ACCESS_DENIED`. Consequently no desktop/mobile interaction or product/cart behaviour on that site is claimed as verified. The brief's requested reusable-card, select/review/enquire, contextual CTA, and direct-contact patterns were adapted independently.

## Functional journey

- Add/remove multiple services from homepage or service cards; review the shortlist; continue to contact. Service slugs alone persist in sessionStorage for the browser tab; storage denial falls back to in-memory selection.
- Service detail links preselect the service. Electrical concept enquiries also preselect electrical work; general concepts make no service claim.
- Contact supports a primary service and additional services, validates required fields, email syntax, phone digits, and trimmed text, and focuses feedback appropriately.
- Review the complete draft, open the configured business email address, or download a text copy. Editing invalidates the prepared draft. Nothing is sent or marked delivered by the website. Photos/drawings can be attached in the visitor's email application; there is no upload service.
- Existing telephone and email actions use the repository's business contact data. WhatsApp remains unavailable because its configuration is null.

## Content and deployment needs

Supply the original logo, approved real project photographs/descriptions, any HVAC scope, and a verified WhatsApp number before enabling those features. Concept imagery remains explicitly labelled throughout. There is insufficient genuine project data for completed-project filtering or case studies.

The current contact workflow requires no credentials. A future server submission/upload workflow would require an approved backend and delivery configuration. Configure `VITE_SITE_URL` for canonical URLs and review the existing 
oindex,nofollow` setting before publication. Existing SPA redirects and business structured data are preserved. This task updates the local repository; it does not publish a hosted site.

## Validation


pm.cmd run build` passes TypeScript and Vite production bundling. An initial unused import error was fixed before the successful build. No lint script is configured.

The original five Playwright cases passed: nine routes at 320, 375, 430, 768, 1024, 1440, and 1920px; no horizontal overflow or page runtime exceptions; mobile menu/Escape; gallery focus restoration; empty-form validation and email/download flow; image decoding and desktop/mobile screenshots. Additional tests cover shortlist persistence, invalid phone/whitespace input, additional-service draft contents, draft invalidation, gallery enquiry context, and reduced motion.

Both additional tests passed using npx.cmd playwright test tests/enquiry.spec.ts. An initial accessible-name mismatch was fixed with an explicit button label. Actual email delivery and telephone applications were not tested.
