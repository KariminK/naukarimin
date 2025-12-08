import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layouts/DefaultLayout.tsx", [
    index("routes/home.tsx"),
    route("/language/:lang", "routes/introduction.tsx"),
    route("/language/:lang/:article", "routes/article.tsx"),
    route("/editor", "routes/editor.tsx"),
    ...prefix("/admin", [
      index("routes/dashboard.tsx"),
      route("login", "routes/login.tsx"),
      route("language/:lang", "routes/adminLanguage.tsx"),
    ]),
    route("/*", "routes/404.tsx"),
  ]),
] satisfies RouteConfig;
