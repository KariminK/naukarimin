import { useParams } from "react-router";
import { Footer, Header, Navbar, TableOfContents } from "~/components/modules";
export default function Introduction() {
  const { lang = "Unknown" } = useParams<{ lang: string }>();
  return (
    <>
      <section className="max-w-7xl text-center mx-auto">
        <h1 className="text-center mt-20 font-bold text-4xl mb-5">{lang}</h1>
        <p className="text-slate-200">
          Służy on głównie do pisania stron internetowych. Z początku był
          tworzony z myślą o używaniu go na frontendzie we współpracy z HTML i
          CSS, jednak dzięki środowisku Node.js znalazł on szerokie zastosowanie
          w różnorakich technologiach od pisania API aż po aplikacjie na
          komputery stacjonarne
        </p>
      </section>
      <TableOfContents></TableOfContents>
    </>
  );
}
