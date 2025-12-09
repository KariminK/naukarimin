import { Form, Link, Outlet, type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "./+types/adminLanguage";
import type { LanguageWithChaptersAndSections } from "~/types";
import ErrorNotFound from "./404";
import { Button } from "~/components/ui";
import { useState } from "react";
import { ChapterView } from "~/features";

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;

  const language = await prisma.language.findFirst({
    where: {
      name: languageName,
    },
    include: {
      chapters: {
        include: {
          sections: true,
        },
      },
    },
  });

  return language;
}
export default function AdminLanguageView({
  loaderData,
}: Route.ComponentProps) {
  const language =
    loaderData as unknown as LanguageWithChaptersAndSections | null;

  if (language === null) return <ErrorNotFound />;

  const [languageDescription, setLanguageDescription] = useState(
    language.description
  );

  return (
    <main className="max-w-4xl text-center mx-auto">
      <h1 className="text-center mt-20 font-bold text-4xl mb-10">
        {language.name}
      </h1>
      <h2>Opis języka:</h2>
      <Form method="post">
        <label htmlFor="langDescription">
          <textarea
            name="description"
            id="langDescription"
            className="w-full text-center border-2 border-slate-600 rounded-lg p-5 my-3 outline-none h-fit"
            value={languageDescription}
            onChange={(ev) =>
              setLanguageDescription(ev.target.value)
            }></textarea>
        </label>
        <Button classname="w-full">Edytuj</Button>
      </Form>
      <Outlet context={language} />
    </main>
  );
}
