import { Party } from "@/components/Party";
import { SearchBar } from "@/components/SearchBar";
import { PartyProps } from "@/types/Party.type";
import Link from "next/link";
import { useState } from "react";
import { CategoryModal } from "@/components/CategoryModal";
const TestData: PartyProps = {
  title: "파티 제목을 적어",
  maxPeople: 13,
  currentPeople: 6,
  price: 50000,
  endDate: "2023.04.01",
};
const Category = [                                                                   
  "전체",
  "카테고리 1",
  "카테고리 2",
  "카테고리 3",
  "카테고리 4",
  "카테고리 5",
];
export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center pt-[8.5rem]">
      <div className="w-[75rem]">
        <div className="w-full h-[18rem] rounded-[2rem] bg-BlueLight-20">
          Tool 사용법이 궁금하다면?
        </div>
        <div className="w-full h-[2.5rem] flex justify-between mt-8 items-center">
          <div className="flex flex-row items-center">
            <CategoryModal
              setData={setCategory}
              data={category}
              category={Category}
            />
            <SearchBar setData={setTitle} />
          </div>
          <Link href="/create">
            <div className="button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30]">
              파티 만들기
            </div>
          </Link>
        </div>
        <div className="w-full lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-8 mt-[2rem] gap-y-[4rem] pb-[8rem]">
          <Party {...TestData} />
          <Party {...TestData} />
          <Party {...TestData} />
          <Party {...TestData} />
        </div>
      </div>
    </div>
  );
};
