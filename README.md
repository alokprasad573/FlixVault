# FlixVault 🎬

A modern web streaming application built with React and Material-UI, providing a sleek and responsive interface for browsing and watching movies.

## Features ✨

- Modern and responsive UI design
- Movie grid layout with left-aligned cards
- Smooth transitions and hover effects
- Material-UI components for consistent design
- React Router for seamless navigation

## Tech Stack 🛠

- React 18
- Vite
- Material-UI (MUI)
- React Router DOM
- Emotion (for styled components)

## Getting Started 🚀

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alokprasad573/FlixVault.git
cd FlixVault
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure 📁

```
src/
├── api/                    # API integration and services
├── components/            # Reusable UI components
│   ├── Filters/          # Filter-related components
│   ├── Header.jsx        # Main navigation header
│   ├── MovieCard.jsx     # Individual movie card component
│   └── MovieGrid.jsx     # Grid layout for movie cards
├── pages/                # Page components
│   ├── Home.jsx         # Home page with movie listings
│   └── MovieDetails.jsx # Individual movie details page
├── App.jsx              # Main application component
└── main.jsx            # Application entry point
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 🙏

- Material-UI for the beautiful component library
- Vite for the blazing fast development experience
- React team for the amazing framework
