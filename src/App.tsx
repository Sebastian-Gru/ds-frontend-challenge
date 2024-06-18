import { mockInit } from './services/apiMock';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  if (import.meta.env.VITE_MOCK === 'true') {
    mockInit();
  }

  return <RouterProvider router={router} />;
};

export default App;
