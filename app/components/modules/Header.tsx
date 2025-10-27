const Header = () => {
  return (
    <header className="max-w-7xl mx-auto my-10">
      <section className="my-10 text-neutral-200 flex items-center gap-5">
        <h2 className="">Ostatni Artykuł: </h2>
        <div className="p-5 border grow border-neutral-800 rounded-md flex gap-5 justify-between items-center">
          <h3 className="font-bold">
            Programowanie obiektowe w Pythonie cz. 2: Klasy
          </h3>
          <button className="border border-green-500 text-green-500 px-5 py-2 rounded-md cursor-pointer outline-0">
            Czytaj...
          </button>
        </div>
      </section>
      <h1 className="text-3xl font-bold text-center">
        Wybierz język, który cię interesuje
      </h1>
    </header>
  );
};

export default Header;
