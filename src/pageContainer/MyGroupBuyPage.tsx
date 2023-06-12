import { Party } from "@/components/Main/Party";
import useMyGroupBuy from "@/hooks/useMyGroupBuy";
import { IGroupBuy, IHistoryList } from "@/types/GroupBuy.type";
import Link from "next/link";
import React from "react";

const MyGroupBuyPage = () => {
  const {
    myGroupBuy,
    isLoading,
  }: { myGroupBuy: IHistoryList; isLoading: boolean } = useMyGroupBuy();
  const myGroupBuyList = myGroupBuy?.groupBuyingResponseList;
  console.log(myGroupBuy);
  return (
    <div className="w-screen h-screen flex flex-row justify-between bg-Background-Gray">
      {/* <ProfileView /> */}
      <div className="w-full h-screen flex flex-col items-center bg-[#fafafa] overflow-scroll">
        <div className="w-full flex flex-col items-center justify-start pt-[10rem]">
          <h2 className="w-[70%] text-[2rem] font-semibold text-left">
            <span className="text-GreenLight-30">My</span> 파티
          </h2>
        </div>
        <div className="w-[70%] lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-6 lg:mt-[2rem] gap-y-[4rem] pb-[4rem]">
          {myGroupBuyList?.map((data: IGroupBuy, idx: number) => (
            <Link
              href={`/groupbuy/${data.id}`}
              as={`/groupbuy/${data.id}`}
              key={idx}
            >
              <Party
                untilAt={data.untilAt}
                class_no={data.class_no}
                student_no={data.student_no}
                {...data}
                key = {idx}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGroupBuyPage;
