import { createFileRoute } from '@tanstack/react-router';

import LoadingPage from '../pages/LoadingPage';
import About from '../pages/About';

export const Route = createFileRoute('/about')({
  pendingComponent: LoadingPage,
  component: About,
});
