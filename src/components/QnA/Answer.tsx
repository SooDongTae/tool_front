import { questionState } from "@/context/questionState";
import { groupId } from "@/context/selectedGroupState";
import { userState } from "@/context/userState";
import useCreateAnswer from "@/hooks/answer/create";
import useAnswer from "@/hooks/answer/get";
import useGroupBuy from "@/hooks/useGroupBuy";
import { IAnswerResponseList } from "@/types/GroupBuy.type";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ReactModal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";

const Answer = ({ id }: { id: string }) => {
  const qState = useRecoilValue(questionState(id));
  const user = useRecoilValue(userState);
  const grpId = useRecoilValue(groupId);
  const { party } = useGroupBuy(grpId);
  const [content, setContent] = useState("");
  const {
    answer,
    isLoading,
  }: { answer: IAnswerResponseList; isLoading: boolean } = useAnswer(id);
  const { mutate } = useCreateAnswer({ id: id, content: content });
  const [isOpen, setIsOpen] = useState(false);
  const answerContent = answer?.answerResponseList[0]?.content;
  console.log(answer);
  return (
    <div
      className={`${
        qState.isClicked ? "h-[10rem] border-b-[0.1rem]" : "h-0"
      } w-full flex border-GrayScale-30 duration-200 bg-GrayScale-10 relative`}
    >
      {qState.isClicked ? (
        <>
          <div className="w-[10%] h-full flex justify-center items-start text-4xl text-GreenLight-30 p-[0.7rem]">
            A
          </div>
          <div className="w-[90%] h-full flex justify-start items-start text-[1.2rem] text-GrayScale-40 p-[1rem]">
            {answerContent ? (
              answerContent
            ) : party.grade === user.grade &&
              party.class_no === user.classNo &&
              party.student_no === user.stuNo ? (
              <div
                onClick={() => setIsOpen(true)}
                className="absolute left-[45%] bg-GreenLight-30 w-[10%] h-[2.5rem] leading-[2.5rem] text-center text-white rounded-[10px] cursor-pointer"
              >
                답변하기
              </div>
            ) : (
              "답변이 없습니다."
            )}
          </div>
        </>
      ) : (
        ""
      )}
      <ReactModal
        ariaHideApp={false}
        className="fixed top-[35%] left-[35%] w-[30%] h-[30%] bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] flex flex-col focus:outline-none"
        isOpen={isOpen}
        onAfterClose={() => setIsOpen(false)}
      >
        <div className="w-full h-[20%] border-b-[0.1rem] border-GrayScale-15 flex flex-row justify-between items-center text-[1.3rem] pl-[3%]">
          <span>질문 답변</span>
          <div className="w-[2.3rem] h-[2.3rem] mr-[3%] bg-GrayScale-15 rounded-[10px] flex justify-center items-center">
            <IoCloseOutline
              onClick={() => {
                setIsOpen(false);
              }}
              size={30}
              color={"black"}
            />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
            mutate({ id: id, content: content });
          }}
          className="w-full h-[80%] flex flex-col justify-center items-center"
        >
          <div className="w-full h-[70%] border-b-[0.1rem] border-GrayScale-15 flex flex-col items-center justify-evenly">
            <input
              onChange={(e) => setContent(e.target.value)}
              className="w-[80%] h-[3rem] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[10px] p-[2%] text-[1.3rem] focus:outline-none"
            />
          </div>
          <div className="w-full h-[30%] flex justify-center items-center">
            <button className="w-[95%] h-[70%] rounded-[10px] bg-GreenLight-30 text-white flex justify-center items-center cursor-pointer duration-200">
              답변 완료
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default Answer;
