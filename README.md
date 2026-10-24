# AWDF Practical 2 — Routed Student Portfolio

The Practical 1 portfolio extended with **React Router v6**, state-driven UI, and a controlled contact form.

## Run locally

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). For a production build and local preview:

```bash
npm run build
npm run preview
```

Run the component tests with `npm test`.

## Routes and component architecture

| Path | Component | Content |
| --- | --- | --- |
| `/` | `Home.jsx` | Header, About, and prop-driven Skills |
| `/projects` | `Projects.jsx` | Five GitHub project cards |
| `/contact` | `Contact.jsx` | Controlled contact form with live preview and character count |
| Any other path | `NotFound.jsx` | Custom 404 page with a route back home |

```text
main.jsx          — BrowserRouter wraps App once
App.jsx           — route table, theme state, shared NavBar and Footer
├── Home.jsx      — Header, About, and Skills
├── Projects.jsx  — five GitHub project entries
├── Contact.jsx   — controlled inputs and toggleable help
└── NotFound.jsx  — unknown-path fallback
```

`App.jsx` owns the student data and passes it to children. Change `student.name`, `student.themeColor`, or the `student.skills` array in `src/App.jsx` to see the UI update. `Skills` renders its list from the prop, so adding a skill needs no new JSX. `NavBar` uses `NavLink` so the active route is identified without a full page reload.

## State and interaction

- `App` uses `useState` to toggle the `theme-dark` class on the root layout. The choice remains active while navigating between routes.
- `Contact` uses `useState` for the visitor name and message. The controlled fields update a live preview, and the message shows a live `0 / 280` character count.
- Another `useState` value shows or hides writing tips.
- The contact action opens the visitor's email app with the message filled in. This portfolio has no backend and does not store or send messages itself.

## Concepts and reflection

- **Why components?** Each component owns one section of the page. It is easier to read, change, and reuse than a single large JSX file. It also avoids repeating the same list markup for every skill or project.
- **How do props update the UI?** React passes data from `App` into child components. When a parent renders with different props, React renders the affected child again and updates the DOM where its output changed.
- **Why this matters at scale:** Shared components keep structure and behavior consistent across a larger app while allowing content to vary through props.
- **Why routes?** Home, Projects, and Contact have distinct URLs and components. React Router updates browser history and the displayed component without loading a new HTML document.
- **Why state?** Props supply parent data; state tracks values changed by interaction. A state update causes React to render the affected UI again.
- **Errors encountered:** The starting repository was empty, so this project was created from scratch. An initial component test exposed `React is not defined` because JSX used the classic React runtime; importing React in each JSX file resolved it. A browser check also found a missing favicon request, which was fixed by adding a local SVG icon. Mobile testing exposed an incorrect active navigation item at the bottom of the page; a scroll-position check now handles that boundary. The skills section includes an empty-list state.
- **Practical 2 reflection:** The copied folder had no Git metadata, so this version is published as its own `ADWF-Practical-2` repository. The old section-anchor navigation was replaced with route links, and the new form uses `mailto:` because the practical has no contact API.

The project cards link to the five repositories supplied for this portfolio. TNP-CELL and AquaSenti are private GitHub repositories, so their cards carry an access note. Their descriptions were checked against the local codebases, and authenticated Git access confirms both remotes exist.
