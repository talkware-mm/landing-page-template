# Deployment Guide

This project is a client-rendered Vite application. It builds into static files and can be deployed to any static host that supports a single-page application fallback.

## Deployment contract

Use these settings on any hosting platform:

| Setting | Value |
| --- | --- |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output or publish directory | `dist` |
| Application entry | `index.html` |
| Required route fallback | Unknown navigation routes → `/index.html` |

Vite writes the production build to `dist/` by default. `npm run preview` is for checking that build locally; it is not intended to be the production server.

## Before deploying

Run a clean local verification:

```bash
npm ci
npm run build
npm run preview
```

Check both routes:

- `http://localhost:4173/`
- `http://localhost:4173/demo`

Also confirm that project metadata, repository links, contact details, credits, and demo content are ready for public viewing.

## Recommended: Cloudflare Pages

Cloudflare Pages works well for this static React application and supports Git-based preview and production deployments.

### Deploy from GitHub

1. Push the project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project.
3. Connect the GitHub repository and select the production branch, normally `main`.
4. Configure the build:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Save and deploy.
6. Open the generated `pages.dev` URL and test `/` and `/demo`.

Cloudflare Pages treats a project without a top-level `404.html` as a single-page application and routes incoming paths back to the root application. This means a direct request to `/demo` works without adding a custom redirect file.

### Direct upload with Wrangler

After building locally, the `dist/` directory can also be uploaded directly:

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=your-project-name
```

Use Git integration for normal community collaboration because every accepted change can create a new deployment automatically. Direct upload is useful for experiments or projects without a connected repository.

### Add a custom domain

Open the Pages project, add the project's domain under **Custom domains**, and follow the DNS instructions. Test both the apex and `www` version you intend to publish, and choose one canonical destination.

## Other static hosts

For Netlify, Vercel, Render, or another static host, use the deployment contract at the top of this document. The important extra setting is the SPA fallback: requests such as `/demo` must serve `index.html` with a successful response instead of returning a 404.

The exact name varies by provider:

- **Rewrite** or **SPA fallback** on many hosts.
- **Fallback file** on static storage platforms.
- **History API fallback** on development and Node-based servers.

Do not use an external redirect from `/demo` to `/`. The host should internally serve `index.html` while preserving `/demo` in the browser address bar.

### Netlify fallback file

If using Netlify, add a `public/_redirects` file containing:

```text
/* /index.html 200
```

Vite copies files from `public/` into `dist/`, so the rule will be included in the deployed output.

## GitHub Pages note

GitHub Pages can deploy a Vite project through GitHub Actions, but repository subpath deployments need extra configuration. This template currently assumes it is hosted at the domain root because it uses clean routes and root-relative assets such as `/logo.png`.

The simplest GitHub Pages option is a custom domain or root user site. If deploying under `https://username.github.io/repository-name/`, update the Vite base path, asset paths, and application routing before deployment. Refer to Vite's official static deployment guide for the current GitHub Pages workflow.

## Environment variables

The template does not currently require environment variables. If the app later connects to an API, expose browser-safe values with Vite's `VITE_` prefix:

```text
VITE_API_URL=https://api.example.com
```

Never put private API keys or server secrets in a Vite client variable. Values bundled into the frontend can be inspected by visitors. Store secrets in a backend or serverless function instead.

## Continuous deployment

A practical community workflow is:

```text
Feature branch → Pull request → Preview deployment → Review → Merge to main → Production deployment
```

Protect the `main` branch and require `npm run build` to pass before merging. Preview deployments are especially useful for reviewing copy, mobile layout, and project demos without changing the public site.

## Troubleshooting

### `/demo` works through a link but fails after refresh

The hosting platform is not rewriting navigation requests to `index.html`. Enable the SPA fallback described above.

### Assets or the logo return 404

Confirm the publish directory is `dist`, not the repository root. If deploying under a URL subpath, configure Vite's base path and update root-relative asset URLs.

### The deployment is blank

Open the browser developer console and deployment build logs. Confirm that `npm run build` completed and that the host published the generated `dist/` directory.

### The contact form does nothing

The included form prevents browser submission because it is a presentation placeholder. Connect it to a real API, serverless function, or form provider before deployment.

### An old version remains visible

Confirm that the latest commit produced a successful deployment. Avoid adding custom cache rules until the standard hosting behavior has been verified.

## Official references

- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html)
- [Vite: Building for Production](https://vite.dev/guide/build)
- [Cloudflare Pages: Serving Pages and SPA behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
