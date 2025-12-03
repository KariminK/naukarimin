import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";

const EditorComponent = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor value={value} onChange={(ev) => setValue(ev ?? "")} />
      <MDEditor.Markdown source={value} />
    </div>
  );
};

export default function Editor() {
  return (
    <>
      <EditorComponent />
    </>
  );
}
