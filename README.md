# Richard's Barbershop

A responsive, one-page barbershop website built with Next.js App Router, TypeScript and plain CSS.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize before launch

1. Edit `app/site-config.ts` to enter the **verified** address, phone number, operating hours, services and barber's bio.
2. The gallery uses JPG and PNG images already in the repository, served from GitHub's public raw file URLs. Check that both photos are appropriate and replace their generic alt text with accurate descriptions.
3. The uploaded `48964.heic` image is not displayed because HEIC is not universally supported in browsers. Convert it to JPG/WebP if you want to feature it.
4. For a production-ready gallery, move optimized images to `public/` and reference them as `/photo-name.jpg`; this avoids depending on the GitHub raw file host.
5. The directions button links to the Visit section until an address is entered; call/text buttons remain disabled until a phone number is entered.
6. Pricing and business hours are intentionally not invented.

## Deploy to Vercel

Import this GitHub repository into Vercel, use the default Next.js framework settings, and deploy. The website can be public even if the GitHub repository is private.

No database, appointment system, or API keys are required.
