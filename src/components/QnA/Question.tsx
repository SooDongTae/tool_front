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
import { useRecoilState, useRecoilValue } from "recoil";

const Question = ({ question }: { question: IQuestion }) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const user = useRecoilValue(userState);
  const [qState, setQState] = useRecoilState(questionState(question.id));
  const [isModifying, setIsModifying] = useState(false);
  const { mutate } = useDeleteQuestion({
    id: "",
    content: "",
    isSecret: false,
  });
  const onValid: SubmitHandler<FieldValues> = (data) => {
    mutate({ id: question.id, content: data.content, isSecret: data.isSecret });
    reset();
  };
  const onInvalid = () => {
    alert("질문 폼을 다시 확인해주세요");
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
      {isModifying ? (
        <form
          onSubmit={handleSubmit(onValid, onInvalid)}
          className="w-[85%] flex flex-row items-center"
        >
          <input
            {...register("content", { required: "질문 입력은 필수입니다." })}
            onClick={(e) => e.stopPropagation()}
            className="block w-[70%] h-[3rem] focus:outline-none text-[1.5rem] shadow-md rounded-[15px] p-[2%]"
          />
          <div className="w-[15%] h-[50%] flex flex-col justify-between items-center">
            <span>비공개</span>
            <input
              {...register("isSecret")}
              onClick={(e) => e.stopPropagation()}
              className="scale-[120%]"
              type="checkbox"
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-GreenLight-30 w-[10%] h-[3rem] mr-[5%] rounded-[15px] flex justify-center items-center text-white text-[1.3rem]"
          >
            수정
          </div>
        </form>
      ) : (
        <div className="w-[85%] h-full flex justify-start items-center text-[1.5rem]">
          {question.writerName === user.name
            ? question.content
            : "비공개 질문입니다."}
        </div>
      )}

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
    </div>
  );
};

export default Question;
