import { Party } from "@/components/Party";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CategoryModal } from "@/components/CategoryModal";
import usePartyList from "@/hooks/useParty";
const Category = ["all", "PRODUCT", "FOOD", "CLOTHES", "ETC"];
export const MainPage = () => {
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  const { partyList, isLoading } = usePartyList({
    title: title,
    category: Category[category],
  });
  const party = useMemo(
    () => partyList?.groupBuyingResponseList || [],
    [partyList]
  );
  const PartyList = party.map((item: any, idx: number) => {
    return (
      <Party
        grade={item.grade}
        classNum={item.class_no}
        studentNum={item.student_no}
        key={idx}
        owner={item.owner}
        title={item.title}
        maxPeople={item.maxPeople}
        currentPeople={item.currentPeople}
        endDate={item.untilAt}
        price={item.cost}
        imgSrc={item.imgSrc}
      />
    );
  });

  return (
    <div className="w-screen h-full flex justify-center pt-[8.5rem] bg-Background-Gray">
      <div className="w-[75rem]">
        <div className="w-full h-[18rem] rounded-[10px] bg-BlueLight-20">
          <a href="https://tool-landingpage.bssm.kro.kr" target="_blink">
            Tool 사용법이 궁금하다면?
          </a>
        </div>
        <div className="w-full h-[2.5rem] flex justify-between mt-8 items-center">
          <div className="flex flex-row items-center ">
            <CategoryModal
              setData={setCategory}
              data={category}
              category={["전체", "상품", "음식", "옷", "기타"]}
            />
            <SearchBar setData={setTitle} data={title} />
          </div>
          <Link href="/create">
            <div className="button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30]">
              파티 만들기
            </div>
          </Link>
        </div>
        <div className="w-full lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-6 mt-[2rem] gap-y-[4rem] pb-[4rem]">
          {PartyList}
        </div>
      </div>
    </div>
  );
};
