import { Party } from "@/components/Party";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CategoryModal } from "@/components/CategoryModal";
import usePartyList from "@/hooks/useParty";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Observer } from "@/components/Observer";
import { SortField } from "@/components/SortField";
import { Loading } from "@/components/Loading";
import { constSelector } from "recoil";
const category = ["all", "PRODUCT", "FOOD", "CLOTHES", "ETC"];
export const MainPage = () => {
  const [cateIdx, setCateIdx] = useState(0);
  const [title, setTitle] = useState("");
  const [sortField, setSortField] = useState("views");
  const { partyList, isLoading, hasNextPage, fetchNextPage } = usePartyList({
    title: title,
    category: category[cateIdx],
    sortField: sortField,
  });
  const handleIntersection = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const party = useMemo(
    () =>
      partyList?.pages.flatMap((page) => page.groupBuyingResponseList) || [],
    [partyList]
  );
  console.log("rerender");
  const PartyList = party.map((item: any, idx: number) => {
    return (
      <Link href={`/groupbuy/${item.id}`}>
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
      </Link>
    );
  });

  return (
    <div className="min-h-screen flex pt-[8.5rem] bg-Background-Gray flex-col items-center scrollbar-hide">
      <div className="lg:w-[75rem] w-[80%]">
        <div className="h-[18rem] rounded-[10px] bg-BlueLight-20 text-4xl font-bold text-GreenLight-30 flex justify-center items-center">
          <a href="https://tool-landingpage.bssm.kro.kr" target="_blink">
            Tool 사용법이 궁금하다면?
          </a>
        </div>
        <div className="lg:h-[2.5rem] h-[7rem] flex justify-between mt-8 lg:items-center lg:flex-row flex-col">
          <div className="flex flex-row items-center justify-between lg:w-[20rem] w-full h-full">
            <CategoryModal
              setData={setCateIdx}
              data={cateIdx}
              category={["전체", "상품", "음식", "옷", "기타"]}
            />
            <SortField
              data={sortField}
              setData={setSortField}
              Icon={<BsGraphUp size="1.5rem" />}
              target="views"
              text="조회수순"
            />
            <SortField
              data={sortField}
              setData={setSortField}
              Icon={<AiOutlineClockCircle size="1.5rem" />}
              target="create_at"
              text="최신순"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <SearchBar setData={setTitle} data={title} />
            <Link href="/create">
              <div className="lg:text-base text-sm button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30] ml-8">
                파티 만들기
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-6 lg:mt-[2rem] mt-[3rem] gap-y-[4rem] pb-[4rem]">
          {isLoading ? <Loading /> : <>{PartyList}</>}
        </div>
      </div>
      {hasNextPage && <Observer handleIntersection={handleIntersection} />}
    </div>
  );
};
