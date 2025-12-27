import { AdminDashboard } from "~/features";
import type { Route } from "./+types/login";
import authMiddleware from "~/authMiddleware.server";
import { Button } from "~/components/ui";
import { destroySession, getSession } from "~/sessions.server";
import { redirect } from "react-router";

export const middleware: Route.MiddlewareFunction[] = [authMiddleware];

export async function action({ request }: Route.ActionArgs) {
  await destroySession(await getSession(request.headers.get("Cookie")));
  return redirect("/");
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <main className="max-w-7xl mx-auto">
      <form method="post">
        <Button>Log Out</Button>
      </form>
      <AdminDashboard />
    </main>
  );
}
