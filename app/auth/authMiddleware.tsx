import { redirect } from "react-router";
import type { Route } from "../routes/+types/login";
import AuthContext from "./AuthContext";

const authMiddleware: Route.MiddlewareFunction = async ({
  request,
  context,
}) => {
  const user = context.get(AuthContext);

  if (!user) throw redirect("/admin/login");
};

export default authMiddleware;
