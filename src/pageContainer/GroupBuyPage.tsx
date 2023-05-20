import { ProgressBar } from "@/components/ProgressBar";
import { IGroupBuy } from "@/types/GroupBuy.type";
import Image from "next/image";
import React from "react";

const GroupBuyPage = ({ party }: { party: IGroupBuy }) => {
  const now = new Date();
  console.log(party?.untilAt);
  const futureTime = new Date(party?.untilAt);
  const timeDifference = futureTime.getTime() - now.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  console.log(hoursDifference);
  return (
    <div className="relative w-screen h-[155vh] flex justify-center pt-[10rem] bg-Background-Gray">
      <div className="w-[55rem] h-full flex flex-col">
        {/* <div className="w-full h-[2.5rem] flex justify-between mt-8">
          <div className="button-layout w-[8rem] bg-GrayScale-20 ">
            카테고리
</div>                                                                                                                                                                                                                        
          <div className="w-[8rem] button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30]">
            파티 만들기
          </div>
        </div> */}
        <div className="w-full h-[60rem]">
          <Image src={party?.imgSrc} alt="공동구매 이미지" />
        </div>
        <div className="flex flex-row justify-between items-center border-b-[0.1rem] border-GrayScale-20">
          <div className="text-3xl text-GreenLight-30 font-bold">
            {party?.owner}
          </div>
          <div className="flex flex-col items-end justify-between h-[6rem]">
            <div className="text-GreenLight-30 p-[0.5rem]">1등급</div>
            <div className="w-[10rem] h-[0.8rem] rounded-[20px] border-[1px] border-GrayScale-20 pr-[0.5rem]">
              <div
                className={`bg-GreenLight-30 rounded-l-[20px] rounded-r-[20px] h-full`}
                // style={{ width: `calc(${6 - 1}*20)` }}
                style={{ width: `calc(100%/5*${6 - 2})` }}
              ></div>
            </div>
            <div className="text-GrayScale-30 p-[0.5rem]">신용등급</div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full flex flex-row items-center mt-[3%]">
            <h2 className="text-[2.3rem] font-semibold w-[20%]">
              {party?.title}
            </h2>
            <span className="text-[1.3rem] text-GrayScale-40 w-[60%]">
              음식 • {hoursDifference}남음
            </span>
            <span className="text-3xl w-[20%] text-end">
              {party?.cost.toLocaleString()}원
            </span>
          </div>
          <p className="w-[60%] text-2xl text-GrayScale-30 mr-[40%] mt-[5%]">
            {party?.content}
          </p>
          <div className="flex flex-col justify-between w-full h-[8rem] mt-[5%]">
            <div className="text-2xl">
              {party?.currentPeople}/{party?.maxPeople}(
              {party?.currentPeople / party?.maxPeople}%)
            </div>
            <ProgressBar
              width="full"
              height="2rem"
              maxi={5}
              current={2}
              color="BlueLight-20"
            />
            <div className="text-GreenLight-30 text-2xl cursor-pointer">
              참여자 리스트 보기
            </div>
          </div>
          {/* <hr className="border-[1px] w-full"></hr> */}
          {/* <Image src={""} alt="" /> */}
          <div className="w-[15rem] h-[3rem] bg-GreenLight-30 mt-[5%] text-white rounded-[10rem] text-center text-2xl items-center justify-center flex">
            참여하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBuyPage;
