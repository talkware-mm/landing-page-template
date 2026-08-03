# Community Project Pitch Pattern

This document defines the content and interaction pattern used by the template. It is intended to help Talkware community projects tell a concise, credible story instead of filling a landing page with unrelated features.

## Pitch sequence

### 1. Promise

The hero should state the project's clearest benefit in plain language.

- Name the category.
- Make one strong promise.
- Explain who benefits and why.
- Offer one primary action and one secondary action.

Avoid opening with implementation details, broad mission statements, or several competing calls to action.

### 2. Problem and value

Use three cards to explain the core case for the project:

1. The real problem or unmet need.
2. What makes the solution simpler or better.
3. The outcome users can expect.

Each card should communicate one idea and remain understandable without the other cards.

### 3. How it works

Describe the user journey in three steps. Prefer action-oriented labels such as “Connect,” “Create,” and “Share.” Keep technical architecture for supporting documentation unless it is itself the project's value.

### 4. Demonstration

The `/demo` route is evidence for the pitch. It can contain:

- A working product.
- An embedded walkthrough video.
- An interactive prototype.
- Screenshots with a guided explanation.
- A small proof of concept.

The demo should reinforce the promise made on the landing route.

### 5. Conversion

End with one clear next step: try the demo, join a waitlist, request access, contact the team, or contribute to the project.

## Route pattern

```text
/       Project story and primary pitch
/demo   Product evidence and contact
```

Both routes share the same header and footer so visitors keep project context throughout the journey.

## Design pattern

- Black, white, and neutral grays only.
- Clear borders instead of heavy decoration.
- Consistent rounded cards and compact controls.
- Large, direct headlines with restrained supporting text.
- Responsive single-column layouts on small screens.
- Visible focus states and semantic HTML.

## Content checklist

Before presenting a community project, confirm that:

- The headline explains the benefit without insider terminology.
- The intended user is identifiable.
- The problem and proposed outcome are specific.
- Every placeholder has been replaced.
- The demo route contains real project evidence.
- Buttons point to working destinations.
- Contact and repository links are correct.
- The footer retains required open-source credits.
- Mobile and desktop layouts have been reviewed.
