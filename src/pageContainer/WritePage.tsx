import { CategoryModal } from "@/components/Shared/CategoryModal";
import useWriteMutation from "@/hooks/community/useWrite";
import { IPost } from "@/types/Post.type";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
export const WritePage = () => {
  const [post, setPost] = useState<IPost>({
    title: "",
    content: "",
  });
  const [category, setCategory] = useState(0);
  const { mutate } = useWriteMutation(post, "FREE");
  const editorRef = useRef<any>(null);
  const tinymcePlugins = ["link", "lists", "autoresize"];
  const tinymceToolbar =
    "undo redo codesample | bold italic | alignleft alignright aligncenter alignjustify | emoticon image media | preview code";
  console.log(post);
  return (
    <div className="pt-[10rem]  flex justify-center">
      <div className="flex w-[75rem] justify-center flex-col">
        <div className="w-full flex justify-between flex-row">
          <CategoryModal
            data={1}
            category={["FREE", "FREE"]}
            setData={setCategory}
          />
          <input
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full  border-[.5px] pl-3 outline-none focus:border-GreenLight-30 rounded-md font-semibold"
            placeholder="제목을 입력해주세요..."
          />
        </div>
        <div className="mt-[2rem]">
          <Editor
            apiKey="d3o8m1lh6b3c9ge9a9jb0g3us91rz86ib2redhyd3lz6ggi9"
            onInit={(e, editor) => (editorRef.current = editor)}
            onEditorChange={(text) => setPost({ ...post, content: text })}
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
        </div>
        <div className="flex justify-center mt-4">
          <button className="button-layout border-[0.5px] bg-GreenLight-30 text-white" onClick={() => mutate()}>
            글 작성
          </button>
        </div>
      </div>
    </div>
  );
};
