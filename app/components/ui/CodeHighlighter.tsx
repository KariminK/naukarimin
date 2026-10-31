import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/esm/styles/hljs/night-owl";

type props = {
  language: string;
  children: string;
};

export default function CodeHighlighter({ language, children }: props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={nightOwl}
      customStyle={{
        padding: "1rem",
      }}>
      {children}
    </SyntaxHighlighter>
  );
}
