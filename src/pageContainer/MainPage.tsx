import { Party } from "@/components/Party";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CategoryModal } from "@/components/CategoryModal";
import usePartyList from "@/hooks/useParty";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
const Category = ["all", "PRODUCT", "FOOD", "CLOTHES", "ETC"];
export const MainPage = () => {
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [sortField, setSortField] = useState("views");
  const { partyList, isLoading, hasNextPage, fetchNextPage } = usePartyList({
    title: title,
    category: Category[category],
    sortField: sortField,
  });
  console.log("partyList", partyList);
  const party = useMemo(
    () =>
      partyList?.pages.flatMap((page) => page.groupBuyingResponseList) || [],
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
          <div className="flex flex-row items-center justify-between w-[20rem] h-full">
            <div
              onClick={() => setSortField("views")}
              className={`flex flex-row items-center text-lg font-semibold h-full cursor-pointer duration-300 ${
                sortField === "views"
                  ? "text-GreenLight-30"
                  : "hover:text-GrayScale-40"
              }`}
            >
              <BsGraphUp size={"1.5rem"} />
              조회수순
            </div>
            <div
              onClick={() => setSortField("create_at")}
              className={`flex flex-row items-center text-lg font-semibold h-full cursor-pointer duration-300 ${
                sortField === "create_at"
                  ? "text-GreenLight-30"
                  : "hover:text-GrayScale-40"
              }`}
            >
              <AiOutlineClockCircle size="1.5rem" />
              최신순
            </div>
            <CategoryModal
              setData={setCategory}
              data={category}
              category={["전체", "상품", "음식", "옷", "기타"]}
            />
          </div>
          <div className="flex flex-row">
            <SearchBar setData={setTitle} data={title} />
            <Link href="/create">
              <div className="button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30] ml-8">
                파티 만들기
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-6 mt-[2rem] gap-y-[4rem] pb-[4rem]">
          {PartyList}
        </div>
      </div>
      <button
        className="w-[10rem] h-[10rem]"
        onClick={async () => {
          await fetchNextPage();
        }}
      >
        click
      </button>
    </div>
  );
};
