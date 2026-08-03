# Contributing

Thank you for helping improve the Talkware Project Pitch Landing Page Template. Contributions should make it easier for community teams to present projects clearly, accessibly, and with minimal setup.

## Ways to contribute

- Fix bugs or accessibility issues.
- Improve responsive behavior.
- Simplify project customization.
- Improve documentation and examples.
- Propose reusable UI primitives.
- Add deployment guidance for community-friendly platforms.

Please keep the template focused. Product-specific features generally belong in the project created from the template, not in the shared template itself.

## Local setup

```bash
git clone https://github.com/talkware-mm/landing-page-template.git
cd landing-page-template
npm install
npm run dev
```

Before submitting a change, run:

```bash
npm run build
```

## Contribution workflow

1. Create an issue or discussion for significant changes.
2. Fork the repository or create a focused branch.
3. Make one logically grouped change.
4. Test both `/` and `/demo` on desktop and mobile widths.
5. Run the production build.
6. Open a pull request describing the problem and the chosen solution.

## Code guidelines

- Use TypeScript and keep strict type checking enabled.
- Prefer small, reusable React components.
- Keep editable project content easy to locate.
- Reuse existing design tokens and UI primitives.
- Avoid adding dependencies when a small local implementation is sufficient.
- Preserve keyboard access, semantic elements, labels, and visible focus states.
- Do not commit secrets, generated `dist/` files, or `node_modules/`.

## Documentation guidelines

Update the relevant documentation when changing architecture, routes, customization steps, or the landing-page pattern. Use plain language that is accessible to new community contributors.

## Pull request checklist

- [ ] The change has a clear community-template use case.
- [ ] `npm run build` passes.
- [ ] `/` and `/demo` still work.
- [ ] Mobile layout has been checked.
- [ ] Accessibility has not regressed.
- [ ] Documentation is updated where necessary.
- [ ] Existing credits and license notices remain intact.

## Reporting security or sensitive issues

Do not publish secrets or sensitive vulnerabilities in a public issue. Contact [team.talkware@gmail.com](mailto:team.talkware@gmail.com) with enough detail for the maintainers to investigate.

## Community conduct

Be respectful, constructive, and welcoming. Feedback should address the work and help contributors move the project forward.
