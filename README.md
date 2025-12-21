# Portfolio (v2)

A minimalist, data-driven portfolio built with Next.js, designed to showcase product engineering work with a focus on clean aesthetics and performance.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom Design System
- **Typography:** Instrument Serif (Google Fonts)
- **Icons:** Custom SVG Components
- **Deployment:** Vercel

## Features

- **Data-Driven Architecture:** Projects and content managed via centralized config files.
- **Component Design System:** Reusable UI components (`Typography`, `Layout`, `Button`) for consistent styling.
- **Responsive Design:** Fully fluid layouts adapted for all device sizes.
- **Performance Optimized:** Next.js image optimization and efficient rendering.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open the local server:**
    Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app` - App Router pages and layouts
- `/components` - Reusable UI and feature components
  - `/ui` - Base design system (Typography, Layout, Buttons)
  - `/home` - Homepage specific sections
- `/lib` - Data configuration and utilities
- `/public` - Static assets (images, fonts)
