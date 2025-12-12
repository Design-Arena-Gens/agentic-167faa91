## Agentic Test Playground

A minimal Next.js 14 application showcasing an experiment-focused landing page. The UI is styled with Tailwind CSS, prerendered via the App Router, and ready for deployment to Vercel.

### Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Available Scripts

- `npm run dev` – start the development server
- `npm run build` – generate the production build
- `npm run start` – run the production server locally
- `npm run lint` – execute ESLint
- `npm run test` – run Vitest unit tests

### Project Notes

- Source lives in the `app/` directory using the App Router.
- Styling is handled by Tailwind CSS via `app/globals.css`.
- Example utility logic resides in `lib/tagline.ts` with matching Vitest coverage.
- Configuration for linting, TypeScript, and Tailwind is included out of the box.
