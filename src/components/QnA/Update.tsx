import useModifyQuestion from "@/hooks/question/update";
import {
  ICreateQuestion,
  IQuestion,
  IQuestionForm,
  IUpdateQuestion,
} from "@/types/GroupBuy.type";
import { values } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

const Update = ({ content, id, isSecret, getIsOpen }: IUpdateQuestion) => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useModifyQuestion();
  const onValid = (data: any) => {
    mutate(
      { id: id, form: data as IQuestionForm },
      { onSuccess: () => reset() }
    );
    getIsOpen(false);
  };
  return (
    <>
      <div className="w-full h-[20%] border-b-[0.1rem] border-GrayScale-15 flex flex-row justify-between items-center text-[1.3rem] pl-[3%]">
        <span>질문 수정</span>
        <div className="w-[2.3rem] h-[2.3rem] mr-[3%] bg-GrayScale-15 rounded-[10px] flex justify-center items-center">
          <IoCloseOutline
            onClick={() => {
              getIsOpen(false);
            }}
            size={30}
            color={"black"}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit((values) => {
          mutate(
            { id: id, form: values as IQuestionForm },
            { onSuccess: () => reset() }
          );
          getIsOpen(false);
        })}
        className="w-full h-[80%] flex flex-col justify-center items-center"
      >
        <div className="w-full h-[70%] border-b-[0.1rem] border-GrayScale-15 flex flex-col items-center justify-evenly">
          <input
            {...register("content", { required: true })}
            defaultValue={content}
            className="w-[80%] h-[3rem] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[10px] p-[2%] text-[1.3rem] focus:outline-none"
          />
          <div className="w-[20%] flex flex-row justify-evenly">
            <span>비공개</span>
            <input
              {...register("secret")}
              type="checkbox"
              defaultChecked={isSecret}
              className="scale-[130%]"
            />
          </div>
        </div>
        <div className="w-full h-[30%] flex justify-center items-center">
          <button className="w-[95%] h-[70%] rounded-[10px] bg-GreenLight-30 text-white flex justify-center items-center cursor-pointer duration-200">
            질문 수정 완료
          </button>
        </div>
      </form>
    </>
  );
};

export default Update;
