import { redirect } from "react-router";
import type { Route } from "../routes/+types/login";
import { getSession } from "~/sessions.server";

const authMiddleware: Route.MiddlewareFunction = async ({
  request,
  context,
}) => {
  const session = await getSession(request.headers.get("Cookie"));

  const user = session.get("userId");

  if (!user) throw redirect("/admin/login");
};

export default authMiddleware;
