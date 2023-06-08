import { questionState } from "@/context/questionState";
import { userState } from "@/context/userState";
import useDeleteQuestion from "@/hooks/question/delete";
import { IQuestion } from "@/types/GroupBuy.type";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReactModal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";
import Update from "./Update";

const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);
  const user = useRecoilValue(userState);
  const [qState, setQState] = useRecoilState(questionState(question.id));
  const [isModifying, setIsModifying] = useState(false);
  const { mutate } = useDeleteQuestion();

  const getIsOpen = (isOpen: boolean) => {
    setIsModifying(isOpen);
  };

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
                    form: {
                      content: question.content,
                      isSecret: question.isSecret,
                    },
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
        <Update
          content={question.content}
          id={question.id}
          isSecret={question.isSecret}
          getIsOpen={getIsOpen}
        />
      </ReactModal>
    </div>
  );
};

export default Question;
