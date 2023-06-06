import { questionState } from "@/context/questionState";
import { userState } from "@/context/userState";
import useCreateAnswer from "@/hooks/answer/create";
import useAnswer from "@/hooks/answer/get";
import useCreateQuestion from "@/hooks/question/create";
import useDeleteQuestion from "@/hooks/question/delete";
import { IQuestion } from "@/types/GroupBuy.type";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";

const Question = ({ question }: { question: IQuestion }) => {
  const user = useRecoilValue(userState);
  const [qState, setQState] = useRecoilState(questionState);
  const { mutate } = useDeleteQuestion({
    id: "",
    content: "",
    isSecret: false,
  });
  const { answer, isLoading } = useAnswer(question.id);
  return (
    <div
      className="w-full h-[6rem] flex flex-row border-b-[0.1rem] border-GrayScale-30 cursor-pointer"
      onClick={() => setQState({ ...qState, isClicked: !qState.isClicked })}
    >
      <div className="w-[10%] h-full flex justify-center items-center text-4xl">
        Q
      </div>
      <div className="w-[85%] h-full flex justify-start items-center text-[1.5rem]">
        {question.writerName === user.name
          ? question.content
          : "비공개 질문입니다."}
      </div>

      {question.writerName === user.name && (
        <div className="relative flex justify-center items-center">
          <BiDotsVerticalRounded
            type="button"
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              setQState({
                ...qState,
                showOption: !qState.showOption,
              });
            }}
          />
          {qState.showOption && (
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
                  mutate({
                    id: question.id,
                    content: question.content,
                    isSecret: question.isSecret,
                  });
                }}
                className="w-full h-1/2 flex justify-center items-center cursor-pointer hover:bg-GrayScale-5 rounded-b-[15px]"
              >
                삭제
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
