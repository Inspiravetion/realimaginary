import { NavLink } from 'react-router';
import { navRoutes } from '~/routes';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <NavLink to={navRoutes.modules.home()}>Modules</NavLink>
        <NavLink to={navRoutes.resources.home()}>Resources</NavLink>
      </div>
    </main>
  );
}
