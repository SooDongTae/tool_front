import { IQuestion } from "@/types/GroupBuy.type";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Question = ({ question }: { question: IQuestion }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showOption, setShowOption] = useState(false);
  return (
    <>
      <div
        className="w-full h-[6rem] flex flex-row border-b-[0.1rem] border-GrayScale-30"
        onClick={() => {
          setIsClicked(!isClicked);
          setShowOption(false);
        }}
      >
        <div className="w-[10%] h-full flex justify-center items-center text-4xl">
          Q
        </div>
        <div className="w-[85%] h-full flex justify-start items-center text-[1.5rem]">
          {question.content}
        </div>
        <div className="relative flex justify-center items-center">
          <BiDotsVerticalRounded
            type="button"
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              setShowOption(!showOption);
            }}
          />
          {showOption ? (
            <div className="absolute right-0 bottom-0 z-50 w-[5rem] h-[5rem] rounded-[15px] shadow bg-white flex flex-col">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-full h-1/2 flex justify-center items-center cursor-pointer hover:bg-GrayScale-5 rounded-t-[15px]"
              >
                수정
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-full h-1/2 flex justify-center items-center cursor-pointer hover:bg-GrayScale-5 rounded-b-[15px]"
              >
                삭제
              </div>
            </div>
          ) : (
            ""
          )}
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
              어쩌라고요 어쩌라고요 어쩌라고요 어쩌라고요 어쩌라고요 어쩌라고요
              어쩌라고요
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
