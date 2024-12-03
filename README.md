# Chess.com - Front End Programming Challenge

ChessClickathon is an interactive web application built using VueJS, styled with SCSS, written in TypeScript, and utilizing Pinia for state management. It was designed as part of a front-end programming challenge by [Chess.com](https://chess.com).

### Live Demo

Explore the live application: [chessclickathon.netlify.app](https://chessclickathon.netlify.app/)

# Features

- Responsive Chessboard: Automatically adjusts to the screen size for both desktop and mobile devices.
- Interactive Sidebar:
  - Positioned to the right of the chessboard on desktop.
  - Positioned below the chessboard on mobile for optimal usability.
- Square Highlighting:
  - Click on a chessboard square to highlight it.
  - Adds a pawn to the selected square.
- Click Tracking:
  - Maintains a record of clicked squares.
  - Tracks the order of clicks.
  - Displays the collected data in the sidebar.

# Getting Started

### Installation

Follow these steps to set up the project locally:

Clone the repository:

```sh
git clone <repository-url>
```

Navigate to the project directory:

```sh
cd chessClicker
```

Install dependencies:

```sh
npm install
```

# Development

### Run the application locally:

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/):

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/):

```sh
npm run lint
```

# Application Requirements

1. Create a page with a chessboard and a sidebar.
2. On desktop devices the sidebar should be positioned to the right of the chessboard.
3. On mobile devices the sidebar should be positioned below the chessboard.
4. The chessboard should resize responsively to consume available space.
5. Clicking a chessboard square should highlight the square.
6. Keep track of which squares are clicked and the order in which they're clicked.
7. Display the information collected from step 6 in the sidebar.

# Questions & Feedback

Please contact Nick Kampa (nkampa@chess.com) with any questions or feedback regarding this challenge.
