import { IEditor } from "@/types/Input.type";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const PostEditor = ({ setData, data }: IEditor) => {
  const editorRef = useRef<any>(null);
  const tinymcePlugins = ["link", "lists", "autoresize"];
  const tinymceToolbar =
    "undo redo codesample | bold italic | alignleft alignright aligncenter alignjustify | emoticon image media | preview code";
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
      onInit={(e, editor) => (editorRef.current = editor)}
      onEditorChange={(text) => setData({ ...data, content: text })}
      init={{
        height: "50rem",
        width: "100%",
        plugins: tinymcePlugins,
        toolbar: tinymceToolbar,
        min_height: 500,
        menubar: false,
        branding: false,
        statusbar: false,
        block_formats: "제목1=h2;제목2=h3;제목3=h4;본문=p;",
      }}
    />
  );
};
export default PostEditor;
