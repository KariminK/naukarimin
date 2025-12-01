import { Link } from "react-router";

const ErrorNotFound = () => {
  return (
    <>
      <main className="text-center">
        <h1 className="font-bold text-4xl mt-5">Error 404: Not Found</h1>
        <img
          src="/404 NotFound.png"
          alt="404 img"
          className="max-w-xl mx-auto"
        />
        <Link to={"/"} className=" font-bold underline text-xl">
          Go back to home page
        </Link>
      </main>
    </>
  );
};

export default ErrorNotFound;
