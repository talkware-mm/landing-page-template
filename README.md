# Talkware Project Pitch Landing Page Template

A reusable black-and-white landing page for community members to explain, demonstrate, and pitch their projects. It is designed for projects built in the Talkware Meetup community, while remaining simple enough to adapt in one sitting.

## Purpose

This template helps a project team answer four questions clearly:

1. What problem does the project solve?
2. Why is the proposed solution useful?
3. How does the project work?
4. What should an interested visitor do next?

The template includes a focused landing route and a separate demo/contact route, wrapped in a shared layout.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

Create a production build with:

```bash
npm run build
npm run preview
```

## Customize your project

Start with [`src/data/project.ts`](src/data/project.ts). It contains the project name, category, headline, summary, and primary action.

Then update:

- `src/pages/LandingPage.tsx` for project benefits and workflow steps.
- `src/pages/DemoPage.tsx` for the live demo, video, prototype, and contact form.
- `public/logo.png` if the project has its own approved logo.
- `style.css` for design tokens and layout adjustments.
- `index.html` for the browser title and metadata.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main project pitch: promise, value, workflow, and call to action. |
| `/demo` | Product demonstration, walkthrough, prototype, and contact section. |

The app uses a small History API router to keep the template dependency-light. Production hosts must rewrite unknown routes such as `/demo` to `index.html`.

## Technology

- React and TypeScript
- Vite
- Lucide icons
- Local shadcn-inspired UI primitives and monochrome design tokens

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Landing-page pattern](PATTERN.md)
- [Contributing](CONTRIBUTING.md)
- [Credits](CREDITS.md)
- [License](LICENSE)

## Talkware community

- Website: [talkware.click](https://www.talkware.click)
- GitHub community: [github.com/talkware-mm](https://github.com/talkware-mm/)
- Template repository: [talkware-mm/landing-page-template](https://github.com/talkware-mm/landing-page-template)
- Email: [team.talkware@gmail.com](mailto:team.talkware@gmail.com)

## License

Released under the [MIT License](LICENSE). See [CREDITS.md](CREDITS.md) for acknowledgements and upstream inspiration.
