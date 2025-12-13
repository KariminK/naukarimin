import {
  Form,
  Outlet,
  type LoaderFunctionArgs,
  type Params,
} from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "./+types/adminLanguage";
import type { LanguageWithChaptersAndSections } from "~/types";
import ErrorNotFound from "./404";
import { Button } from "~/components/ui";
import { useState } from "react";

async function editArticleDescription(formData: FormData, params: Params) {
  const description = formData.get("description") as string;
  const languageName = params.lang;

  const updated = await prisma.language.updateMany({
    where: { name: languageName },
    data: { description },
  });
  return updated;
}

async function addChapter(formData: FormData, params: Params) {
  const chapterTitle = formData.get("chapter") as string;
  const languageName = params.lang;

  const newChapter = await prisma.chapter.create({
    data: {
      title: chapterTitle,
      language: {
        connect: {
          name: languageName,
        },
      },
    },
  });
  return newChapter;
}

async function addSection(formData: FormData, params: Params) {
  const sectionTitle = formData.get("section") as string;
  const languageName = params.lang;
  const chapterTitle = params.chapterTitle;

  const chapter = await prisma.chapter.findFirst({
    where: {
      title: chapterTitle,
      language: {
        name: languageName,
      },
    },
  });

  if (chapter === null) throw new Error("failed to fetch chapter");

  const newSection = await prisma.section.create({
    data: {
      title: sectionTitle,
      content: "",
      chapter: {
        connect: {
          id: chapter.id,
        },
      },
    },
  });
  return newSection;
}

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  console.log(intent);
  try {
    switch (intent) {
      case "editDescription":
        return await editArticleDescription(formData, params);
      case "addChapter":
        return await addChapter(formData, params);
      case "addSection":
        return await addSection(formData, params);
    }
  } catch (error) {
    console.log("Erorr: ", error);
  }
}

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
  actionData,
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
      <Form method="put">
        <input type="hidden" name="intent" value="editDescription" />
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
      {actionData && (
        <p className="text-green-400 my-5">Zaktualizowano opis pomyślnie</p>
      )}
      <Outlet context={language} />
    </main>
  );
}
