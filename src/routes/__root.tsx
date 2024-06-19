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
        <div className="flex items-center">
          <img src={Logo} className="h-14 px-4" alt="Website Logo" />
          <Text size="xl">GovDATA</Text>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md" className="bg-gray-200">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
