import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';
import navRoutes from './navRoutes';

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
