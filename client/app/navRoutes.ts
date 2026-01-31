// gives us an easy way to reference routes with abolute paths
// that align with our route config
const navRoutes = {
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

export default navRoutes;
