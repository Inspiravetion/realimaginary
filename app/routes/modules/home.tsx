import { NavLink } from 'react-router';
import { navRoutes } from '~/routes';
import type { Route } from './+types/home';
import db from './db.json';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Modules!' },
    { name: 'description', content: 'Real Imaginary Modules' },
  ];
}

export default function Modules() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {db.modules.map((m) => (
          <NavLink to={navRoutes.modules.details(m.id)}>{m.name}</NavLink>
        ))}
      </div>
    </main>
  );
}
