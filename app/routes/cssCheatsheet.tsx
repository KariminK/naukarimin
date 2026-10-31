import { CheatsheetSection } from "~/components/ui";

export default function CSSCheatsheet() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-3">Ściąga CSS</h1>
      <ul className="grid p-2 lg:grid-cols-3 gap-5 flex-wrap mt-5 mx-auto max-w-7xl">
        <CheatsheetSection
          title="Podstawy"
          content={[
            {
              term: "Dołączenie pliku CSS do HTML",
              code: `<link rel="stylesheet" href="style.css" />`,
              lang: "xml",
            },
            {
              term: "Podstawowa składnia",
              code: `selektor {\n\/\* właściwości \*\/\n}`,
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Selektory"
          content={[
            {
              term: "Selektor znacznika",
              code: `h1 {} \/\* nagłówki h1 \*\/`,
              lang: "css",
            },
            {
              term: "Selektor klasy",
              code: `.btn {} \/\* elementy o klasie btn \*\/`,
              lang: "css",
            },
            {
              term: "Selektor id",
              code: `#box {} \/\* element o id box \*\/`,
              lang: "css",
            },
            {
              term: "Selektor kilku różnych elementów",
              code: `div, p {} \/\* nagłówki i paragrafy \*\/`,
              lang: "css",
            },
            {
              term: "Selektor zagnieżdżony",
              code: `section h1 {} \/\* nagłówki w tagu sekcji  \*\/`,
              lang: "css",
            },

            {
              term: "Selektor bezpośredniego dziecka",
              code: `#box > p {} \/\* paragrafy bezpośrednio w elemencie box \*\/`,
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Odstępy"
          content={[
            {
              term: "Margines zewnętrzny",
              code: "element {\nmargin-top: 20px;\nmargin-right: 30px;\nmargin-bottom: 10px;\nmargin-left: 5px;\n\/\* wersja skrócona \*\/\nmargin: 20px 30px 10px 5px;\n}",
              lang: "css",
            },
            {
              term: "Margines wewnętrzny",
              code: "element {\npadding-top: 20px;\npadding-right: 30px;\npadding-bottom: 10px;\npadding-left: 5px;\n\/\* wersja skrócona \*\/\npadding: 20px 30px 10px 5px;\n}",
              lang: "css",
            },
          ]}
        />
      </ul>
    </>
  );
}
