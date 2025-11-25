import { Navigate, type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import { TableOfContents } from "~/features";
import type { Route } from "../+types/root";
import type { Language } from "~/generated/prisma/client";

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;

  if (languageName === "") return "";

  const language = await prisma.language.findFirst({
    where: {
      name: languageName,
    },
  });

  if (language === null) return "";

  return language;
}

export default function Introduction({ loaderData }: Route.ComponentProps) {
  const language = loaderData as unknown as Language | string;

  if (typeof language === "string")
    return <Navigate to={"/"} replace={true}></Navigate>;

  return (
    <>
      <section className="max-w-7xl text-center mx-auto">
        <h1 className="text-center mt-20 font-bold text-4xl mb-5">
          {language.name}
        </h1>
        <p className="text-slate-200">{language.description}</p>
        <TableOfContents
          chapters={[
            {
              title: "Funkcje",
              sections: [
                {
                  content: "string",
                  path: "/string/string",
                  title: "lorem ipsum",
                },
              ],
            },
          ]}></TableOfContents>
      </section>
    </>
  );
}
