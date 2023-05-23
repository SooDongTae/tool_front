import Question from "@/components/QnA/Question";
import React, { useState } from "react";

const QuestionPage = () => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  return (
    <form className="relative w-screen h-screen flex justify-center">
      <div className="absolute w-[7%] h-[5%] left-[45%] bottom-[2%] flex flex-row justify-between items-center">
        <div>질문 비공개</div>
        <input className="scale-[130%]" type="checkbox" />
      </div>
      <div className="absolute w-[40%] h-[6%] left-[30%] bottom-[8%] bg-GrayScale-10 border-[0.1rem] border-GrayScale-40 rounded-[10px] flex flex-row">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
          className="w-[80%] h-full rounded-[10px] rounded-r-none pl-[1rem] focus:outline-none text-[1.2rem]"
          placeholder="질문을 입력해주세요."
        />
        <button
          className={`w-[20%] h-full text-GrayScale-40 text-[1.2rem] flex justify-center rounded-r-[8px] items-center ${
            input ? "bg-GreenLight-30 text-white" : ""
          }`}
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
        <Question />
      </div>
    </form>
  );
};

export default QuestionPage;
