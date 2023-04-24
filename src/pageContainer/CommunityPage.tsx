import { CategoryModal } from "@/components/CategoryModal";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
const Category = ["전체", "자유", "공구", "문의"];
export const CommunityPage = ({ school }: { school: string }) => {
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <div className="w-screen pt-[10rem] flex justify-center">
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
          <SearchBar setData={setTitle} />
        </div>
        <div className="flex ">
            
        </div>
      </div>
    </div>
  );
};
