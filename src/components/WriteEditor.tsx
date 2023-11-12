import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { EditorWrap } from "../styles/WriteEditorStyle";

const WriteEditor = () => {
  const editorRef = useRef<Editor | null>(null);

  const handleTextChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    if (data !== undefined) {
      console.log(data);
    }
  };

  return (
    <EditorWrap>
      <Editor
        ref={editorRef}
        initialValue="테스트 중입니다?"
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        hideModeSwitch={true}
        language="ko-KR"
        plugins={[colorSyntax]}
        onChange={handleTextChange}
      />
    </EditorWrap>
  );
};

export default WriteEditor;
