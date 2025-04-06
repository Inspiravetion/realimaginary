import type { Route } from './+types/details';
import db from './db.json';

export default function ResourceDetails({ params }: Route.ComponentProps) {
  const resource = db.resources.find((r) => r.id === params.resourceId);

  if (!resource) {
    return `Resource ${params.resourceId} not found.`;
  }

  return (
    <div style={{ padding: '24px' }}>
      {`Resoucre ${resource.name} has tags ${JSON.stringify(
        resource.tags,
        null,
        4
      )}`}
    </div>
  );
}
