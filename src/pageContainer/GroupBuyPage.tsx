import { Party } from "@/components/Party";
import { PartyProps } from "@/types/Party";
import Image from "next/image";
import React from "react";

const TestData: PartyProps = {
  title: "파티 제목을 적어",
  subtitle: "파티의 설명을 적어",
  reserve: [true, true, false, false],
  price: 50000,
  endDate: "2023.04.01",
};

const GroupBuyPage = () => {
  return (
    <div className="w-screen h-[200vh] flex justify-center pt-[10rem]">
      <div className="w-[75rem] h-full">
        <div className="w-full h-[2.5rem] flex justify-between mt-8">
          <div className="button-layout w-[8rem] bg-GrayScale-20 ">
            카테고리
          </div>
          <div className="w-[8rem] button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30]">
            파티 만들기
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <div className="w-full flex flex-row justify-start items-center">
            <h2 className="text-4xl">공동구매</h2>
            <span className="text-2xl ml-[5%]">3112 전수향</span>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <p className="w-[55%] text-2xl text-GrayScale-30">
              파티 설명, 파티 설명, 파티 설명, 파티 설명, 파티 설명, 파티 설명,
              파티 설명, 파티 설명, 파티 설명, 파티 설명, 파티 설명, 파티 설명,
              파티
            </p>
            <span className="text-3xl">참여 비용 : 50000원</span>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="w-[10rem] h-[10rem] bg-GrayScale-30 rounded-2xl"></div>
            <div className="w-[10rem] h-[10rem] bg-GrayScale-30 rounded-2xl"></div>
            <div className="w-[10rem] h-[10rem] border-GrayScale-30 border-[2px] rounded-2xl"></div>
            <div className="w-[10rem] h-[10rem] border-GrayScale-30 border-[2px] rounded-2xl"></div>
          </div>
          <hr className="border-[1.5px] w-full"></hr>
          {/* <Image src={""} alt="" /> */}
          <div className="w-full h-[70vh] bg-BlueLight-20"></div>
          <div className="w-[20rem] h-[5rem] bg-GreenLight-30 text-white rounded-3xl text-center text-4xl font-semibold items-center justify-center flex">
            카테고리
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBuyPage;
