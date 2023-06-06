import { CategoryModal } from "@/components/CategoryModal";
import { CommunityPost } from "@/components/Community/CommunityPost";
import { SearchBar } from "@/components/SearchBar";
import usePostList from "@/hooks/community/usePost";
import { Pagination } from "@mui/material";
import Link from "next/link";
import { useMemo, useState } from "react";
const Category = ["전체", "자유", "공구", "문의"];
export const CommunityPage = ({ school }: { school: string }) => {
  const [category, setCategory] = useState(0);
  const [pageIdx, setPageIdx] = useState(1);
  const [title, setTitle] = useState("");
  console.log(pageIdx);
  const { postList, isLoading } = usePostList({
    title: title,
    category: "FREE",
    page: pageIdx,
  });
  console.log(postList);
  const post = useMemo(() => postList?.boardResponseList || null, [postList]);
  const PostList = post?.map((item: any, idx: number) => {
    return (
      <CommunityPost
        key={idx}
        owner={item.owner}
        recommend={item.likes}
        view={item.views}
        title={item.title}
        created_at={item.created_at.substring(0, 10)}
        category={item.category}
      />
    );
  });
  return (
    <div className="min-h-screen pt-[10rem] flex justify-center bg-Background-Gray">
      <div className="w-[75rem]">
        <div className="text-3xl tracking-wider">
          <span className="font-bold">{school}</span>
          <span> 커뮤니티</span>
        </div>
        <div className="flex flex-row mt-[2rem] items-center justify-between">
          <div className="flex flex-row items-center">
            <CategoryModal
              setData={setCategory}
              data={category}
              category={Category}
            />
            <div className="ml-[2rem]">
              <SearchBar setData={setTitle} data={title} />
            </div>
          </div>
          <Link href="/write">
            <button className="button-layout border-[.5px] border-GreenLight-30 text-GreenLight-30 hover:text-white hover:bg-GreenLight-30">
              글 작성
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full mt-[2rem]">
          <div className="w-full flex h-[2.5rem] border-b-[1px] border-GrayScale-30">
            <div className="w-[15%] community-title ">작성자</div>
            <div className="w-[50%] community-title">제목</div>
            <div className="w-[15%] community-title">작성일</div>
            <div className="w-[10%] community-title">조회수</div>
            <div className="w-[10%] community-title">추천</div>
          </div>
          <div className="w-full flex flex-col min-h-[28rem] ">{PostList}</div>
        </div>
        <div className="flex justify-center">
          <Pagination
            count={postList?.maxPage}
            defaultPage={1}
            onChange={(e, value) => setPageIdx(value)}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
