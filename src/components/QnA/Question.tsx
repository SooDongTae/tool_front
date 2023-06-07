import { questionState } from "@/context/questionState";
import { userState } from "@/context/userState";
import useCreateAnswer from "@/hooks/answer/create";
import useAnswer from "@/hooks/answer/get";
import useCreateQuestion from "@/hooks/question/create";
import useDeleteQuestion from "@/hooks/question/delete";
import { IQuestion } from "@/types/GroupBuy.type";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import ReactModal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";

const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);
  const user = useRecoilValue(userState);
  const [qState, setQState] = useRecoilState(questionState(question.id));
  const [isModifying, setIsModifying] = useState(false);
  const { mutate } = useDeleteQuestion({
    id: "",
    content: "",
    isSecret: false,
  });
  return (
    <div
      className="w-full h-[6rem] flex flex-row border-b-[0.1rem] border-GrayScale-30 cursor-pointer"
      onClick={() =>
        qState.showOption
          ? setQState({ ...qState, showOption: false })
          : !isModifying &&
            setQState({ showOption: false, isClicked: !qState.isClicked })
      }
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
                  setIsModifying(true);
                  setQState({ ...qState, showOption: false });
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
      <ReactModal
        className="fixed top-[35%] left-[35%] w-[30%] h-[30%] bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] flex flex-col focus:outline-none"
        isOpen={isModifying}
        onAfterClose={() => setIsModifying(false)}
      >
        <div className="w-full h-[20%] border-b-[0.1rem] border-GrayScale-15 flex flex-row justify-between items-center text-[1.3rem] pl-[3%]">
          <span>질문 수정</span>
          <div className="w-[2.3rem] h-[2.3rem] mr-[3%] bg-GrayScale-15 rounded-[10px] flex justify-center items-center">
            <IoCloseOutline size={30} color={"black"} />
          </div>
        </div>
        <form className="w-full h-[80%] flex flex-col justify-center items-center">
          <div className="w-full h-[70%] border-b-[0.1rem] border-GrayScale-15 flex flex-col items-center justify-evenly">
            <input className="w-[80%] h-[3rem] shadow-lg rounded-[10px] p-[2%] text-[1.3rem] focus:outline-none" />
            <div className="w-[20%] flex flex-row justify-evenly">
              <span>비공개</span>
              <input type="checkbox" className="scale-[130%]" />
            </div>
          </div>
          <div className="w-full h-[30%] flex justify-center items-center">
            <button className="w-[95%] h-[70%] rounded-[10px] bg-GreenLight-30 text-white flex justify-center items-center cursor-pointer duration-200">
              질문 수정 완료
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default Question;
