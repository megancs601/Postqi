# React + TypeScript + Vite

Postqi is a user-friendly project management application built around the Kanban methodology. It was designed with newcomers in mind, making it easy for users to understand and adopt the workflow process.

Users can create tasks (cards) and drag them across columns representing different stages of progress, giving them a clear and visual representation of their current workflow.

## Checklist of Features

### ✅ Done

- Functional Login, Dashboard, NotFound pages
- Draggable cards (up and down same column, and moving to different columns)
- Deleting Tasks
- Staying logged in and also logged out using local storage

### 🔜 To-Do (high level, no particular order)

- About page
- Adding new task(s)
- Adding new column(s)
- Moveable columns
- Edit tasks
- Edit tags
- Edit due date
- Filtering tasks
- Searching tasks
- Saving tasks to a database
- End-to-end testing

### 🌟 Nice to Have

- Dark/Light mode
- List mode
- Archive
- Multiple Dashboards

## Technologies Used

- [React](https://reactjs.org/) — UI library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) — Typed superset of JavaScript
- [Vite](https://vitejs.dev/) — Fast build tool and development server
- [React Router](https://reactrouter.com/) — Declarative routing for React apps
- [Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/) — State management
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) — Drag-and-drop for React
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [@base-ui-components/react](https://github.com/your-org/base-ui-components) — Base UI components
- [Testing Library](https://testing-library.com/) (React, DOM, Jest DOM, User Event) — Testing utilities
- [Vitest](https://vitest.dev/) — Vite-native test runner
- [ESLint](https://eslint.org/) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) — Code linting
- [Prettier](https://prettier.io/) — Code formatter
- [Husky](https://typicode.github.io/husky/#/) & [lint-staged](https://github.com/okonet/lint-staged) — Git hooks for pre-commit checks
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```
