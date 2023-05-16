import Question from "@/components/QnA/Question";
import React from "react";

const QuestionPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[55rem] h-full pt-[6rem] overflow-scroll pb-[3rem]">
        <div>
          <div className="w-full border-b-[0.1rem] text-[1.5rem] border-GrayScale-30 pt-[5%]">
            공동구매 질문
          </div>
        </div>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default QuestionPage;
