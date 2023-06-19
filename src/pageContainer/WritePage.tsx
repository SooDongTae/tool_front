import { CategoryModal } from "@/components/Shared/CategoryModal";
import useWriteMutation from "@/hooks/community/useWrite";
import { IPost } from "@/types/Post.type";
import dynamic from "next/dynamic";
import { useState } from "react";
const PostEditor = dynamic(() => import("../components/Shared/PostEditor"), {
  ssr: false,
});
export const WritePage = () => {
  const [post, setPost] = useState<IPost>({
    title: "",
    content: "",
  });
  const [category, setCategory] = useState(0);
  const { mutate } = useWriteMutation(post, "FREE");
  console.log(post);
  return (
    <div className="layout">
      <div className="container">
        <div className="flex justify-between">
          <CategoryModal
            data={1}
            category={["FREE", "FREE"]}
            setData={setCategory}
          />
          <input
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-[90%]  border-[.5px] border-GrayScale-20 pl-3 outline-none focus:border-GreenLight-30 rounded-md font-semibold"
            placeholder="제목을 입력해주세요..."
          />
        </div>
        <div className="mt-[2rem]">
          <PostEditor setData={setPost} data={post} />
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="w-[8rem] h-[4rem] border-[0.5px] bg-GreenLight-30 text-white rounded-lg text-xl font-bold"
            onClick={() => mutate()}
          >
            글 작성
          </button>
        </div>
      </div>
    </div>
  );
};
