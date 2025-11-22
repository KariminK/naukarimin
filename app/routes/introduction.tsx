import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import prisma from "~/db/prisma";
import { TableOfContents } from "~/features";
export default function Introduction() {
  const { lang = "Unknown" } = useParams<{ lang: string }>();

  const [introduction, setIntroduction] = useState<string>("");

  useEffect(() => {
    prisma.language
      .findFirstOrThrow({
        where: {
          name: lang.toLowerCase(),
        },
      })
      .then((language) => {
        setIntroduction(language.description);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <section className="max-w-7xl text-center mx-auto">
        <h1 className="text-center mt-20 font-bold text-4xl mb-5">{lang}</h1>
        <p className="text-slate-200">{introduction}</p>
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
