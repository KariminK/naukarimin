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
        <CheatsheetSection
          title="Rozmiary"
          content={[
            {
              term: "Szerokość",
              code: "width: 100px;",
              lang: "css",
            },
            {
              term: "Wysokość",
              code: "height: 100px;",
              lang: "css",
            },
            {
              term: "Wliczaj padding i border do rozmiaru elementu",
              code: "box-sizing: border-box;",
              lang: "css",
            },
            {
              term: "Przepełnienie elementu (np. ukrywanie nadmiaru)",
              code: "overflow: hidden;",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Kolory"
          content={[
            {
              term: "Kolor tła",
              code: "background-color: rgb(255,0,0);",
              lang: "css",
            },
            {
              term: "Kolor czcionki",
              code: "color: red;",
              lang: "css",
            },
            {
              term: "Cień tekstu",
              code: "/* wartości: [x] [y] [rozmycie] [kolor] */\ntext-shadow: 0px 0px 10px #000000;",
              lang: "css",
            },
            {
              term: "Cień elementu",
              code: "/* wartości: [x] [y] [rozmycie] [rozpiętość] [kolor] */\nbox-shadow: 0px 0px 10px 5px #000000;",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Ramka"
          content={[
            {
              term: "Grubość ramki",
              code: "border-width: 5px;",
              lang: "css",
            },
            {
              term: "Styl ramki",
              code: "border-style: solid;",
              lang: "css",
            },
            {
              term: "Kolor ramki",
              code: "border-color: rgb(0, 255, 0);",
              lang: "css",
            },
            {
              term: "Skrócony zapis",
              code: "border: 5px solid rgb(0, 255, 0);",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Tekst"
          content={[
            {
              term: "Rozmiar czcionki",
              code: "font-size: 24px;",
              lang: "css",
            },
            {
              term: "Grubość czcionki",
              code: "font-weight: bold;",
              lang: "css",
            },
            {
              term: "Styl czcionki (np. kursywa)",
              code: "font-style: italic;",
              lang: "css",
            },
            {
              term: "Wyrównanie tekstu (np. do środka)",
              code: "text-align: center;",
              lang: "css",
            },
            {
              term: "Dekoracja tekstu (np. podkreślenie)",
              code: "text-decoration: underline;",
              lang: "css",
            },
            {
              term: "Transformacja tekstu (np. wielkie litery)",
              code: "text-transform: uppercase;",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Tło"
          content={[
            {
              term: "Tło jako obraz",
              code: 'background-image: url("link_do_obrazka");',
              lang: "css",
            },
            {
              term: "Rozmiar tła (np. pokrycie elementu)",
              code: "background-size: cover;",
              lang: "css",
            },
            {
              term: "Pozycja tła (np. środek)",
              code: "background-position: center;",
              lang: "css",
            },
            {
              term: "Powtarzanie tła (kiedy tło jest za małe do pokrycia elementu)",
              code: "background-repeat: repeat;",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Transformacje"
          content={[
            {
              term: "Translacja (przesunięcie)",
              code: "transform: translate(20px, 50px)",
              lang: "css",
            },
            {
              term: "Obrót",
              code: "transform: rotate(45deg)",
              lang: "css",
            },
            {
              term: "Skala (powiększenie/pomniejszenie)",
              code: "transform: scale(1.5);",
              lang: "css",
            },
            {
              term: "Skala (powiększenie/pomniejszenie)",
              code: "transform: scale(1.5);",
              lang: "css",
            },
            {
              term: "Skala (powiększenie/pomniejszenie)",
              code: "transform: scale(1.5);",
              lang: "css",
            },
            {
              term: "Wykrzywienie",
              code: "transform: skew(20deg, 20deg);",
              lang: "css",
            },
            {
              term: "Transformacje dla jednego wymiaru",
              code: "transform: scaleY(0.4);\ntransform: translateX(20px);",
              lang: "css",
            },
          ]}
        />

        <CheatsheetSection
          title="Flexbox dla kontenera"
          content={[
            {
              term: "Wyświetlanie",
              code: ".container {\ndisplay: flex;\n}",
              lang: "css",
            },
            { term: "Oś główna - domyślnie pozioma" },
            { term: "Oś krzyżowa - domyślnie pionowa" },
            {
              term: "Wyrównanie wzdłuż osi głównej",
              code: ".container {\njustify-content: [wartość];\n}",
              lang: "css",
            },
            {
              term: "Wyrównanie wzdłuż osi krzyżowej",
              code: ".container {\nalign-items: [wartość];\n}",
              lang: "css",
            },
            {
              term: "Zawijanie elementów do nowej linii",
              code: ".container {\nflex-wrap: wrap;\n}",
              lang: "css",
            },
            {
              term: "Wyrównanie rzędów kolejnych elementów wzdłuż osi krzyżowej",
              code: ".container {\nalign-content: [wartość];\n}",
              lang: "css",
            },
            {
              term: "Zamiana kierunku osi głównej (np. z poziomu na pion)",
              code: ".container {\nflex-direction: [wartość]; \n}",
              lang: "css",
            },
          ]}
        />
        <CheatsheetSection
          title="Flexbox dla elementu w kontenerze"
          content={[
            {
              term: "Kolejność",
              code: ".box { order: 1; /* im więcej, tym dalej w kolejności */ }",
              lang: "css",
            },
            {
              term: "Wypełnianie wolnej przestrzeni",
              code: ".box { flex-grow: 1; /* zajmie całą wolną przestrzeń */ }",
              lang: "css",
            },
            {
              term: "Kurczenie się, kiedy brakuje przestrzeni",
              code: ".box { flex-shrink: 0; /* element nie kurczy się */ }",
              lang: "css",
            },
            {
              term: "Wyrównanie pojedynczego elementu wzdłuż osi krzyżowej",
              code: ".box { align-self: [wartość]; }",
              lang: "css",
            },
            {
              term: "Początkowa szerokość elementu",
              code: ".box { flex-basis: 300px; }",
              lang: "css",
            },
          ]}
        />
      </ul>
    </>
  );
}
