import { AdminDashboard } from "~/features";
import type { Route } from "./+types/login";
import { AuthContext, authMiddleware } from "~/auth";

export const middleware: Route.MiddlewareFunction[] = [authMiddleware];

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <main className="max-w-7xl mx-auto">
      <AdminDashboard />
    </main>
  );
}
