# The Wild Oasis

The Wild Oasis is a small boutique hotel with 8 luxurious wooden cabins.
This internal management app helps the staff handle bookings, cabins,
guests, and check-ins as guests arrive. The codebase follows a
feature-based structure built with Vite and React.

This repository is for educational purposes as part of a [Udemy course](https://www.udemy.com/course/the-ultimate-react-course/).
I took the project idea from the course and I'm updating parts of the
design myself.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Other Commands

- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run eslint checks

## Project Structure

```
src/
  App.jsx            # App root component
  main.jsx           # React entry point
  data/              # Static data and images
  features/          # Feature modules (bookings, cabins, etc.)
  hooks/             # Custom React hooks
  pages/             # Route-level pages
  services/          # API layer
  styles/            # Global styles
  ui/                # Shared UI components
  utils/             # Helper utilities
```
