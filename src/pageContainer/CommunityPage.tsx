import { CategoryModal } from "@/components/Shared/CategoryModal";
import { CommunityPost } from "@/components/Community/CommunityPost";
import { Loading } from "@/components/Shared/Loading";
import { SearchBar } from "@/components/Shared/SearchBar";
import usePostList from "@/hooks/community/usePost";
import { Pagination } from "@mui/material";
import Link from "next/link";
import { useMemo, useState } from "react";
const category = ["전체", "자유", "공구", "문의"];
const RCategory = ["all", "FREE", "PARTY", "QUESTION"];
export const CommunityPage = ({ school }: { school: string }) => {
  const [cateIdx, setCateIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(1);
  const [title, setTitle] = useState("");
  const { postList, isLoading } = usePostList({
    title: title,
    category: RCategory[cateIdx],
    page: pageIdx,
  });
  const post = useMemo(() => postList?.boardResponseList || null, [postList]);
  const PostList = post?.map((item: any, idx: number) => {
    return (
      <Link href={`/detail/${item.id}`} key={idx}>
        <CommunityPost key={idx} {...item} />
      </Link>
    );
  });
  return (
    <div className="layout">
      <div className="container">
        <div className="text-3xl tracking-wider">
          <span className="font-bold">{school}</span>
          <span> 커뮤니티</span>
        </div>
        <div className="flex flex-row mt-[2rem] items-center justify-between">
          <div className="flex flex-row items-center">
            <CategoryModal
              setData={setCateIdx}
              data={cateIdx}
              category={category}
            />
            <div className="ml-[2rem]">
              <SearchBar setData={setTitle} />
            </div>
          </div>
          <Link href="/write">
            <button className="button-layout border-[.5px] border-GreenLight-30 text-GreenLight-30 hover:text-white hover:bg-GreenLight-30">
              글 작성
            </button>
          </Link>
        </div>{" "}
        {!isLoading ? (
          <>
            <div className="flex flex-col mt-[2rem]">
              <div className="flex h-[2.5rem] border-b-[1px] border-GrayScale-30">
                <div className="w-[15%] community-title ">작성자</div>
                <div className="w-[50%] community-title">제목</div>
                <div className="w-[15%] community-title">작성일</div>
                <div className="w-[10%] community-title">조회수</div>
                <div className="w-[10%] community-title">추천</div>
              </div>
              <div className="flex flex-col min-h-[28rem] ">{PostList}</div>
            </div>
            <div className="flex justify-center">
              <Pagination
                className="mt-[2rem]"
                count={postList?.maxPage}
                defaultPage={pageIdx}
                onChange={(e, value) => setPageIdx(value)}
                variant="outlined"
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
