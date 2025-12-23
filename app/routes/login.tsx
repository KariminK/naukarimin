import { LoginForm } from "~/features";
import type { Route } from "./+types/login";
import { redirect } from "react-router";
import { commitSession, getSession } from "~/sessions.server";

// export const middleware: Route.MiddlewareFunction[] = [authMiddleware];

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const login = formData.get("login") as string;
  const password = formData.get("password") as string;
  const ADMIN_LOGIN = process.env.ADMIN_LOGIN ?? "admin";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin";
  const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "adminsecret";
  console.log(ADMIN_LOGIN);
  console.log(ADMIN_PASSWORD);

  if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", ADMIN_SECRET);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return "Invalid login or password";
  }
}

export default function Login({ actionData }: Route.ComponentProps) {
  return (
    <main className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Zaloguj się</h1>
      <LoginForm />
      {actionData && (
        <p className="text-red-500 text-center p-5">{actionData}</p>
      )}
    </main>
  );
}
