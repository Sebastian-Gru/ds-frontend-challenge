import React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

const RootComponent = () => {
  return (
    <div className="max-h-screen w-full flex flex-col min-h-screen">
      <h1>Dashboard</h1>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 w-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
