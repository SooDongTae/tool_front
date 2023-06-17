import { Party } from "@/components/Main/Party";
import { SearchBar } from "@/components/Shared/SearchBar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CategoryModal } from "@/components/Shared/CategoryModal";
import usePartyList from "@/hooks/party/useParty";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineClose } from "react-icons/ai";
import { Observer } from "@/components/Shared/Observer";
import { SortField } from "@/components/Main/SortField";
import { Loading } from "@/components/Shared/Loading";
import { ChatBot } from "@/components/Shared/ChatBot";
import { IParty } from "@/types/Party.type";
import Image from "next/image";
const category = ["all", "PRODUCT", "FOOD", "CLOTHES", "ETC"];
export const MainPage = () => {
  const [open, setOpen] = useState(false);
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
  const PartyList = party.map((item: IParty, idx: number) => {
    return (
      <Link href={`/groupbuy/${item.id}`} as={`/groupbuy/${item.id}`} key={idx}>
        <Party {...item} />
      </Link>
    );
  });
  return (
    <div className="layout">
      <div className="lg:w-[75rem] w-[80%]">
        <div className="h-[18rem] rounded-[10px] bg-BlueLight-20 text-4xl font-bold text-GreenLight-30 flex justify-center items-center">
          <a href="https://tool-landing-page.vercel.app" target="_blink">
            Tool 사용법이 궁금하다면?
          </a>
        </div>
        <div className="lg:h-[2.5rem] h-[7rem] flex justify-between mt-8 lg:items-center lg:flex-row flex-col">
          <div className="flex flex-row items-center justify-between lg:w-[20rem]">
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
            <SearchBar setData={setTitle} />
            <Link
              href="/create"
              className="lg:text-base text-sm button-layout text-GreenLight-30 hover:bg-GreenLight-30  hover:text-[white] border-[.5px] border-GreenLight-30 ml-8"
            >
              파티 만들기
            </Link>
          </div>
        </div>
        <div className="lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-6 lg:mt-[2rem] mt-[3rem] gap-y-[4rem] pb-[4rem]">
          {isLoading ? <Loading /> : <>{PartyList}</>}
        </div>
      </div>
      {hasNextPage && <Observer handleIntersection={handleIntersection} />}
      <div
        className="fixed bg-white right-10 bottom-10 w-[4rem] h-[4rem] shadow-[rgba(0,_0,_0,_0.1)_0px_4px_16px_0px] hover:border-GreenLight-30 border-[.5px] border-GrayScale-15 cursor-pointer  duration-300 rounded-[25px] flex justify-center items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <>
            <ChatBot />
            <AiOutlineClose size={"3rem"} className="text-GreenLight-30" />
          </>
        ) : (
          <Image
            src="/chat.png"
            width={100}
            height={100}
            priority={true}
            alt="챗봇 이미지"
          />
        )}
      </div>
    </div>
  );
};
