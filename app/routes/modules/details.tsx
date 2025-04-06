import { NavLink } from 'react-router';
import resourceDB from '../resources/db.json';
import type { Route } from './+types/details';
import db from './db.json';

export default function ModuleDetails({ params }: Route.ComponentProps) {
  const module = db.modules.find((m) => m.id === params.moduleId);

  if (!module) {
    return `Module ${params.moduleId} not found.`;
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{ fontSize: '1.5em', marginBottom: '16px', textAlign: 'center' }}
      >
        {module.name}
      </h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {module.resources.map((resourceId) => (
          <NavLink to={`/resources/${resourceId}`}>
            {resourceDB.resources.find((r) => r.id === resourceId)?.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
