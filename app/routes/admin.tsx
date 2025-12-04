import { LoginForm } from "~/features";

export default function Admin() {
  return (
    <main className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Zaloguj się</h1>
      <LoginForm />
    </main>
  );
}
