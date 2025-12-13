import { Form, Link, useOutletContext } from "react-router";
import { Button, TextInput } from "~/components/ui";
import type { LanguageWithChaptersAndSections } from "~/types";

const ChapterView = () => {
  const language = useOutletContext() as LanguageWithChaptersAndSections;
  return (
    <>
      <h2 className="my-10">Rozdziały:</h2>
      <ul className="list-none my-10">
        {language.chapters.map((chapter, index) => (
          <li className="my-5 text-blue-400 underline" key={index}>
            <Link to={`/admin/language/${language.name}/${chapter.title}`}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
      <Form
        action={`/admin/language/${language.name}`}
        method="post"
        className="flex items-end justify-center gap-2">
        <TextInput
          id="newChapter"
          type="text"
          name="chapter"
          label="Nowy rozdział"
        />
        <input type="hidden" name="intent" value="addChapter" />
        <Button>Dodaj rozdział</Button>
      </Form>
    </>
  );
};

export default ChapterView;
