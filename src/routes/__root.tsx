import React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { AppShell, Text } from '@mantine/core';
import Logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const RootComponent = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>
        <header className="flex items-center" role="banner">
          <img src={Logo} className="h-14 px-4" alt="GovDATA Watch Logo" />
          <Text size="xl" component="h1">
            GovDATA Watch
          </Text>
        </header>
      </AppShell.Header>

      <AppShell.Navbar p="md" className="bg-gray-200">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <main role="main">
          <Outlet />
        </main>
      </AppShell.Main>
    </AppShell>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
