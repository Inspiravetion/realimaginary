import { NavLink } from 'react-router';
import { navRoutes } from '~/routes';
import resourceDB from '../resources/db.json';
import type { Route } from './+types/details';
import db from './db.json';

export default function ModuleDetails({ params }: Route.ComponentProps) {
  const mod = db.modules.find((m) => m.id === params.moduleId);

  if (!mod) {
    return `Module ${params.moduleId} not found.`;
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{ fontSize: '1.5em', marginBottom: '16px', textAlign: 'center' }}
      >
        {mod.name}
      </h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {mod.resources.map((resourceId) => (
          <NavLink to={navRoutes.resources.details(resourceId)}>
            {resourceDB.resources.find((r) => r.id === resourceId)?.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
