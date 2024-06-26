# ds-frontend-challenge

This project is a frontend dashboard for GovData, the data portal for Germany. The dashboard displays the number of data sets each federal ministry has made available on GovData and allows filtering and sorting of the data.

The application is deployed to Github Pages here: https://sebastian-gru.github.io/ds-frontend-challenge

## Not Implemented

Keep in mind that the project is not fully implemented. This is an incomplete list of missing features and improvements:

- **Responsive Design**: The dashboard is not optimized for mobile devices and design could be improved.
- **Full Test Coverage**: The tests are not comprehensive due to time limitations.
- **Error Handling**: Error handling is not implemented.
- **Logging**: Loading states are not implemented.
- **Accessibility**: Accessibility is tested with Chrome Lighthouse but could be also further analyzed and improved.
  **Active Link Styling**: Active link in navbar only works locally.
- **And More**: Many other features are missing or incomplete.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Mantine**: A React component library with hooks and styles.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TanStack Query**: Powerful asynchronous state management for React.
- **TanStack Router**: Type-safe routing library for React.
- **TanStack Table**: Headless table library for building powerful tables and datagrids.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Vitest**: A blazing-fast unit test framework powered by Vite.
- **ESLint**: A pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: An opinionated code formatter.

This might be a little overkill in terms of technology stack for this project. I wanted to try out some new libraries and tools.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sebastian-gru/ds-frontend-challenge.git
   cd ds-frontend-challenge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Linting and Formatting

To lint the code, run:

```sh
npm run lint
```

To format the code with Prettier, run:

```sh
npm run format
```

### Testing

To run the tests, run:

```sh
npm run test
```

### Deployment to Github Pages

To deploy the application to Github Pages, run:

```sh
npm run build

npm run deploy
```

### Project Structure

    •	src: Contains the source code.
    •	components: Reusable React components.
    •	pages: Page components.
    •	routes: Routing configuration.
    •	services: API service functions.
    •	models: TypeScript models.
    •	public: Public assets and static files.

### Features

    •	Dashboard: Displays data sets from federal ministries with filtering and sorting functionality.
    •	Routing: Managed with TanStack Router.
    •	State Management: Managed with TanStack Query.
    •	Styling: Implemented with Mantine and Tailwind CSS.
