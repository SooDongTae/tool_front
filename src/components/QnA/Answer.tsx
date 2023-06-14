import { questionState } from "@/context/questionState";
import useAnswer from "@/hooks/answer/get";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Answer = ({ id }: { id: string }) => {
  const qState = useRecoilValue(questionState(id));
  const { answer, isLoading } = useAnswer(id);
  return (
    <div
      className={`${
        qState.isClicked ? "h-[10rem] border-b-[0.1rem]" : "h-0"
      } w-full flex flex-row border-GrayScale-30 duration-200 bg-GrayScale-10`}
    >
      {qState.isClicked ? (
        <>
          <div className="w-[10%] h-full flex justify-center items-start text-4xl text-GreenLight-30 p-[0.7rem]">
            A
          </div>
          <div className="w-[90%] h-full flex justify-start items-start text-[1.2rem] text-GrayScale-40 p-[1rem]">
            <div>
              <p>답변이 없습니다.</p>
              <div>답변하기</div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Answer;
