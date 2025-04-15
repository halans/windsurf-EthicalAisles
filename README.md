# Ethical Aisles

A neobrutalist web app that helps you make ethical supermarket choices by listing major American-owned brands and their alternatives. Discover which products to avoid and find high-quality local options instead.

## Features
- Bold, neobrutalist UI with a masonry layout for easy browsing
- Product cards with brand, description, and ethical/local alternatives
- Responsive design for desktop and mobile
- Footer with call to action and back-to-top link

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## Deployment
This app can be deployed to any static hosting service (e.g. Netlify, Vercel, GitHub Pages):
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` folder to your hosting provider.

## Customization
- To add or edit products and alternatives, modify `src/App.jsx`.
- To adjust the UI, edit `src/style.css`.

## License
MIT
