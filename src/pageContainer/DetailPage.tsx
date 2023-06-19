import { Comment } from "@/components/Community/Comment";
import { NameConverter } from "@/components/Shared/NameConverter";
import useComment from "@/hooks/community/useComment";
import useCommentMutation from "@/hooks/community/useCommentAdd";
import usePostDetail from "@/hooks/community/useDetail";
import useLikeMutation from "@/hooks/community/useLike";
import { IComment } from "@/types/Community.type";
import { useMemo, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
export const DetailPage = ({ id }: { id: string }) => {
  const [text, setText] = useState("");
  const { postDetail, isLoading: postLoading } = usePostDetail(id);
  const { mutate: likeMutate } = useLikeMutation(id);
  const { mutate: commentMutate } = useCommentMutation(id, text);
  const { commentList, isLoading: commentLoading } = useComment(id);
  const comments = useMemo(
    () => commentList?.commentResponses || [],
    [commentList]
  );
  const Comments = comments.map((item: IComment, idx: number) => {
    return <Comment {...item} key={idx} />;
  });
  const detail = useMemo(() => postDetail || {}, [postDetail]);
  return (
    <div className="layout">
      <div className="container">
        <div className="text-3xl font-bold h-[3rem] border-b-2 border-GreenLight-30 text-GreenLight-30 ">
          {"자유게시판"}
        </div>
        <div className="h-[4rem] flex flex-col justify-center border-b-[.5px] border-GrayScale-20">
          <span className="text-xl font-bold">{detail.title}</span>
          <span className="text-sm flex justify-between">
            <NameConverter
              grade={detail.grade}
              class_no={detail.class_no}
              student_no={detail.student_no}
              owner={detail.owner}
            />
            <div className="w-[9rem] flex justify-between">
              <span className="flex flex-row items-center">
                {detail.myLike === "none" ? (
                  <AiOutlineHeart
                    className="text-GreenLight-30 cursor-pointer mr-2"
                    size={"1.2rem"}
                    onClick={() => likeMutate()}
                  />
                ) : (
                  <AiFillHeart
                    className="text-[red] cursor-pointer mr-2"
                    onClick={() => likeMutate()}
                    size={"1.2rem"}
                  />
                )}
                추천 {detail.likes}
              </span>
              <span>조회수 {detail.views}</span>
            </div>
          </span>
        </div>
        <div
          className="pt-4 min-h-[30rem]  pb-4"
          dangerouslySetInnerHTML={{ __html: detail.content }}
        />
        <div className="">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-GreenLight-30 ">
              {comments.length}개의 댓글
            </span>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="댓글을 입력하세요"
              className="mt-4 focus:outline-none resize-none bg-Background-Gray border-[.5px] border-GrayScale-20 pl-4 pt-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setText("");
                  commentMutate();
                }}
                className="button-layout border-[.5px] mt-10 text-GreenLight-30 hover:bg-GreenLight-30  hover:text-[white] border-GreenLight-30"
              >
                댓글 작성
              </button>
            </div>
          </div>
          {Comments}
        </div>
      </div>
    </div>
  );
};
