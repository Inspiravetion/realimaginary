import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./routes/navLayout.tsx", [
    index("./routes/home.tsx"),

    ...prefix("modules", [
      index("./routes/modules/home.tsx"),
      route(":moduleId", "./routes/modules/details.tsx"),
    ]),

    ...prefix("resources", [
      index("./routes/resources/home.tsx"),
      route(":resourceId", "./routes/resources/details.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
