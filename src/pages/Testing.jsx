import { useRef } from "react";
import Editor from "@monaco-editor/react";

export default function Testing() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        options={{
          scrollbar: {
            alwaysConsumeMouseWheel: false, // ✅ page scrolls when editor can't
          },
        }}
      />
    </>
  );
}
