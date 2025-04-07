import { NavLink } from 'react-router';
import { navRoutes } from '~/routes';
import type { Route } from './+types/home';
import db from './db.json';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resources!' },
    { name: 'description', content: 'Real Imaginary Resources' },
  ];
}

export default function Resources() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {db.resources.map((r) => (
          <NavLink to={navRoutes.resources.details(r.id)}>{r.name}</NavLink>
        ))}
      </div>
    </main>
  );
}
