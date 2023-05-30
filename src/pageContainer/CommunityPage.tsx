import { CategoryModal } from "@/components/CategoryModal";
import { CommunityPost } from "@/components/Community/CommunityPost";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
const Category = ["전체", "자유", "공구", "문의"];
export const CommunityPage = ({ school }: { school: string }) => {
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <div className="w-screen pt-[10rem] h-screen flex justify-center bg-Background-Gray">
      <div className="w-[75rem] ">
        <div className="text-3xl tracking-wider">
          <span className="font-bold">{school}</span>
          <span> 커뮤니티</span>
        </div>
        <div className="flex flex-row mt-[2rem] items-center">
          <CategoryModal
            setData={setCategory}
            data={category}
            category={Category}
          />
          <div className="ml-[2rem]">
            <SearchBar setData={setTitle} data={title} />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[2rem]">
          <div className="w-full flex h-[2.5rem] border-b-[1px] border-GrayScale-30">
            <div className="w-[15%] community-title ">작성자</div>
            <div className="w-[50%] community-title">제목</div>
            <div className="w-[15%] community-title">작성일</div>
            <div className="w-[10%] community-title">조회수</div>
            <div className="w-[10%] community-title">추천</div>
          </div>
          <div className="w-full flex flex-col">
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
            <CommunityPost
              owner="donghuni"
              title="초코에몽 공구할 사람 구함"
              category="자유"
              view="123"
              recommend="321"
              created_at="2005.05.12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
