import React from 'react';

import { Link, useRouterState } from '@tanstack/react-router';

type RouteItem = {
  name: string;
  path: string;
  icon: string;
};

const Navbar = () => {
  const router = useRouterState();

  const navItems: RouteItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: '📋',
    },
    {
      name: 'About',
      path: '/about',
      icon: '🏢',
    },
  ];

  return (
    <nav className="flex flex-col" aria-label="Main navigation">
      {navItems.map(({ name, path, icon }) => {
        const isActive = router.location.pathname === path;
        return (
          <Link
            key={name}
            to={path}
            className={`mb-4 mt-3 p-2 text-gray-800 ${isActive && 'bg-slate-100 rounded-lg'}`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`${name} page`}
            tabIndex={0}
          >
            <span role="img" aria-hidden="true">
              {icon}
            </span>{' '}
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
