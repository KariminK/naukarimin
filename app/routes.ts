import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layouts/DefaultLayout.tsx", [
    index("routes/home.tsx"),
    route("/:lang", "routes/introduction.tsx"),
  ]),
] satisfies RouteConfig;
