import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';

// gives us an easy way to reference routes with abolute paths
// that align with our route config
export const navRoutes = {
  home: () => '/',
  modules: {
    prefix: 'modules',
    home: () => `/${navRoutes.modules.prefix}` as const,
    details: (moduleId: string) =>
      `${navRoutes.modules.home()}/${moduleId}` as const,
  },
  resources: {
    prefix: 'resources',
    home: () => `/${navRoutes.resources.prefix}` as const,
    details: (resourceId: string) =>
      `${navRoutes.resources.home()}/${resourceId}` as const,
  },
} as const;

const routes = [
  layout('./routes/navLayout.tsx', [
    index('./routes/home.tsx'),

    ...prefix(navRoutes.modules.prefix, [
      index('./routes/modules/home.tsx'),
      route(':moduleId', './routes/modules/details.tsx'),
    ]),

    ...prefix(navRoutes.resources.prefix, [
      index('./routes/resources/home.tsx'),
      route(':resourceId', './routes/resources/details.tsx'),
    ]),
  ]),
] satisfies RouteConfig;

export default routes;
