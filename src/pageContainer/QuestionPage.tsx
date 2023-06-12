import Answer from "@/components/QnA/Answer";
import Question from "@/components/QnA/Question";
import useCreateQuestion from "@/hooks/question/create";
import useQuestion from "@/hooks/question/get";
import {
  ICreateQuestion,
  IQuestion,
  IQuestionForm,
} from "@/types/GroupBuy.type";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IQuestionList {
  questionResponseList: [IQuestion];
}

const QuestionPage = ({ id }: { id: string }) => {
  const { register, handleSubmit, reset } = useForm();
  const {
    questions,
    isLoading,
  }: { questions: IQuestionList; isLoading: boolean } = useQuestion(id);
  const questionList = questions?.questionResponseList;
  const { mutate } = useCreateQuestion();
  return (
    <form
      // onSubmit={onSubmit}
      onSubmit={handleSubmit((values) =>
        mutate(
          { id: id, form: values as IQuestionForm },
          { onSuccess: () => reset() }
        )
      )}
      className="relative w-screen h-screen flex justify-center"
    >
      <div className="absolute w-[7%] h-[5%] left-[45%] bottom-[2%] flex flex-row justify-between items-center">
        <div>질문 비공개</div>
        <input
          {...register("secret")}
          className="scale-[130%]"
          type="checkbox"
        />
      </div>
      <div className="absolute w-[40%] h-[7%] left-[30%] bottom-[8%] bg-GrayScale-10 border-[0.1rem] border-GrayScale-40 rounded-[10px] flex flex-row">
        <input
          {...register("content", { required: true })}
          className="w-[80%] h-full rounded-[10px] rounded-r-none pl-[1rem] focus:outline-none text-[1.2rem]"
          placeholder="질문을 입력해주세요."
        />
        <button
          className="w-[20%] h-full text-[1.2rem] flex justify-center border-l-[0.1rem] border-GrayScale-40 rounded-r-[8px] items-center bg-GreenLight-30 text-white"
          type="submit"
        >
          질문하기
        </button>
      </div>
      <div className="w-[55rem] h-full pt-[6rem] overflow-scroll pb-[3rem]">
        <div>
          <div className="w-full border-b-[0.1rem] text-[1.5rem] border-GrayScale-30 pt-[5%]">
            공동구매 질문
          </div>
        </div>
        {questionList?.map((question: IQuestion, key: number) => (
          <div className="w-full" key = {key}>
            <Question question={question} key={question.id} />
            <Answer id={question.id} key={question.id} />
          </div>
        ))}
      </div>
    </form>
  );
};

export default QuestionPage;
