# Architecture

## Overview

The template is a small client-rendered React application. It separates shared layout, route-level pages, reusable UI primitives, and editable project data so community teams can change content without rebuilding the whole structure.

```text
index.html
└── src/main.tsx
    └── App.tsx
        └── MainLayout
            ├── Header
            ├── Active page
            │   ├── LandingPage  (/)
            │   └── DemoPage     (/demo)
            └── Footer
```

## Directory structure

```text
public/
  logo.png                 Talkware/project logo asset
src/
  components/
    ui/                    Small shadcn-inspired primitives
    Footer.tsx             Shared footer, links, and credits
    Header.tsx             Shared navigation
    Logo.tsx               Logo presentation
    RouteLink.tsx          Internal History API navigation
  data/
    project.ts             Main editable project configuration
  layouts/
    MainLayout.tsx         Shared page shell
  pages/
    LandingPage.tsx        Project pitch route
    DemoPage.tsx           Demo and contact route
  App.tsx                  Route selection
  main.tsx                 React entry point
style.css                  Tokens, components, sections, responsiveness
```

## Routing

`App.tsx` reads `window.location.pathname` and selects the matching page. `RouteLink` updates browser history and emits a `popstate` event, enabling client-side navigation without a routing package.

Supported routes:

- `/` renders `LandingPage`.
- `/demo` renders `DemoPage`.
- Unknown paths currently fall back to `LandingPage`.

Because this is a single-page application, the deployment platform must rewrite direct requests for `/demo` to `/index.html`.

## Data flow

The shared `project` object in `src/data/project.ts` supplies project identity and primary call-to-action content. Route-specific lists, such as benefits and workflow steps, live beside their page in `LandingPage.tsx` to keep editing straightforward.

For a larger project, move these lists into `src/data/` or connect them to a CMS while preserving the same component interface.

## UI system

The UI follows shadcn-style conventions without requiring the full shadcn CLI:

- Neutral design tokens are declared in `style.css`.
- Button, Badge, and Card primitives live in `src/components/ui/`.
- Variants are expressed as predictable classes such as `button-default` and `button-outline`.
- Sections use a shared container width, border treatment, radius, and muted foreground color.

## Build flow

```text
TypeScript type check → Vite bundle → dist/
```

`npm run build` runs both the TypeScript compiler and Vite production build. The generated `dist/` directory is intentionally ignored by Git.
