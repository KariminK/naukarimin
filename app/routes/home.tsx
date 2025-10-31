import { Footer, Header, Navbar, TableOfContents } from "~/components/modules";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <section className="max-w-7xl text-center mx-auto">
        <h1 className="text-center mt-20 font-bold text-4xl mb-5">
          Javascript
        </h1>
        <p className="text-slate-200">
          Służy on głównie do pisania stron internetowych. Z początku był
          tworzony z myślą o używaniu go na frontendzie we współpracy z HTML i
          CSS, jednak dzięki środowisku Node.js znalazł on szerokie zastosowanie
          w różnorakich technologiach od pisania API aż po aplikacjie na
          komputery stacjonarne
        </p>
      </section>
      <TableOfContents></TableOfContents>
      <Footer></Footer>
    </>
  );
}
