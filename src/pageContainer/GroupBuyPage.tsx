import LeftTime, { GetLeftTime } from "@/components/LeftTime";
import { ProgressBar } from "@/components/ProgressBar";
import { IGroupBuy } from "@/types/GroupBuy.type";
import Image from "next/image";
import { useQueryClient } from "react-query";
import React, { useEffect, useState } from "react";

const GroupBuyPage = ({ party }: { party: IGroupBuy }) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["party"]);
  }, []);
  const [leftTime, setLeftTime] = useState({
    leftDay: 0,
    leftHour: 0,
    leftMinute: 0,
    leftSecond: 0,
  });
  setInterval(() => {
    const { leftDay, leftHour, leftMinute, leftSecond } = GetLeftTime(
      party?.untilAt
    );
    setLeftTime({
      leftDay: leftDay,
      leftHour: leftHour,
      leftMinute: leftMinute,
      leftSecond: leftSecond,
    });
  }, 1000);

  return (
    <div className="relative w-screen h-auto flex justify-center pt-[10rem] bg-Background-Gray">
      <div className="w-[55rem] h-full flex flex-col">
        <img
          src={party?.imgSrc.substring(21)}
          className="w-full h-[600px] object-contain"
          alt="공동구매 이미지"
        />
        <div className="flex flex-row justify-between items-center border-b-[0.1rem] border-GrayScale-20">
          <div className="text-3xl text-GreenLight-30 font-bold">
            {party?.grade}
            {party?.class_no}
            {party?.student_no > 9
              ? party?.student_no
              : "0" + party?.student_no}{" "}
            {party?.owner}
          </div>
          <div className="flex flex-col items-end justify-between h-[6rem]">
            <div className="text-GreenLight-30 p-[0.5rem]">
              {party?.ownerRating}등급
            </div>
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
            <h2 className="text-[2.3rem] font-semibold whitespace-nowrap mr-[3%]">
              {party?.title}
            </h2>
            <LeftTime leftTime={leftTime} />
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
              maxi={party?.maxPeople}
              current={party?.currentPeople}
              color="BlueLight-20"
            />
            <div className="text-GreenLight-30 text-2xl cursor-pointer">
              참여자 리스트 보기
            </div>
          </div>
          {/* <hr className="border-[1px] w-full"></hr> */}
          {/* <Image src={""} alt="" /> */}
          <div className="w-[15rem] h-[3rem] bg-GreenLight-30 m-[5%] text-white rounded-[10rem] text-center text-2xl items-center justify-center flex">
            참여하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBuyPage;
