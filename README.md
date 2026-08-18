# Talkware Project Pitch Landing Page Template

A reusable black-and-white landing page for community members to explain, demonstrate, and pitch their projects. It is designed for projects built in the Talkware Meetup community, while remaining simple enough to adapt in one sitting.

<img width="1920" height="4806" alt="image" src="https://github.com/user-attachments/assets/fe5ef527-47d0-4301-b8ef-eb39717af90a" />


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

## What's next? How do I make an app with this?

Treat the template as the presentation layer for your idea, then replace one layer at a time.

### 1. Create your copy

Use GitHub's **Use this template** action when it is available, or clone the repository into a new project folder:

```bash
git clone https://github.com/talkware-mm/landing-page-template.git my-project
cd my-project
npm install
```

Change the Git remote if the new app will live in a different repository.

### 2. Define the project promise

Edit `src/data/project.ts` first. Replace every placeholder with:

- The project name and category.
- One clear headline describing the user benefit.
- A short explanation of the user, problem, and solution.
- The primary action visitors should take.

If the headline cannot explain the project to someone outside the team, refine it before adding more sections.

### 3. Tell the project story

Edit `src/pages/LandingPage.tsx` and follow the sequence in [PATTERN.md](PATTERN.md):

```text
Promise → Problem and value → How it works → Demo → Next action
```

Replace the three benefit cards and three workflow steps. Keep each card focused on one idea.

### 4. Add the real demo

Use `src/pages/DemoPage.tsx` for evidence that the project works. Replace the placeholder frame with one of the following:

- A working interactive component.
- An embedded prototype or walkthrough video.
- Product screenshots with a guided explanation.
- A link to a separately hosted application.

The current contact form is visual only. Connect it to your chosen API, form provider, or backend before collecting real submissions.

### 5. Apply the project identity

Replace `public/logo.png`, update the page metadata in `index.html`, and adjust the neutral design tokens in `style.css` only when the project needs a different visual identity. Keep the shared UI primitives in `src/components/ui/` consistent.

### 6. Test the complete pitch

```bash
npm run build
npm run preview
```

Review `/` and `/demo` on desktop and mobile. Confirm that every button, external link, email address, image, and form destination is real.

### 7. Deploy and share

Follow [DEPLOYMENT.md](DEPLOYMENT.md) to publish the `dist/` build. After deployment, test a direct visit to `/demo`; this confirms that the host's single-page application fallback is configured correctly.

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
- [Deployment guide](DEPLOYMENT.md)
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
