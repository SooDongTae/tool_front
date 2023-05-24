import { IQuestion } from "@/types/GroupBuy.type";
import React, { useState } from "react";

const Question = ({ question }: { question: IQuestion }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        className="w-full h-[6rem] flex flex-row border-b-[0.1rem] border-GrayScale-30"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <div className="w-[10%] h-full flex justify-center items-center text-4xl">
          Q
        </div>
        <div className="w-[80%] h-full flex justify-start items-center text-[1.5rem]">
          {question.content}
        </div>
        <div className="w-[10%] h-full flex justify-center items-center">
          1시간 전
        </div>
      </div>
      <div
        className={`${
          isClicked ? "h-[10rem] border-b-[0.1rem]" : "h-0"
        } w-full flex flex-row bg-GrayScale-10 border-GrayScale-30 duration-200`}
      >
        {isClicked ? (
          <>
            <div className="w-[10%] h-full flex justify-center items-start text-4xl text-GreenLight-30 p-[0.7rem]">
              A
            </div>
            <div className="w-[80%] h-full flex justify-start items-start text-[1.2rem] text-GrayScale-40 p-[1rem]">
              환불 완료 되었습니다.
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Question;
