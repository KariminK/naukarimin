import { Header } from "~/components/modules";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Naukarimin" },
    {
      name: "description",
      content: "Materiały do nauki Python, Javascript i C++",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header></Header>
    </>
  );
}
