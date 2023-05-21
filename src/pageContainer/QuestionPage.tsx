import Question from "@/components/QnA/Question";
import React, { useState } from "react";
import Modal from "react-modal";

const QuestionPage = () => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        className="absolute w-[40%] h-[8%] left-[30%] top-[37.5%] bg-GrayScale-10 border-[0.1rem] border-GrayScale-40 rounded-[10px] focus:outline-none"
      >
        <div className="w-full h-full flex flex-row">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
            className="w-[80%] h-full rounded-[10px] rounded-r-none pl-[1rem] focus:outline-none text-[1.2rem]"
            placeholder="질문을 입력해주세요."
          />
          <div
            className={`w-[20%] h-full text-GrayScale-40 text-2xl flex justify-center rounded-r-[8px] items-center ${
              input ? "bg-GreenLight-30 text-white" : ""
            }`}
          >
            질문
          </div>
        </div>
      </Modal>
      <div
        onClick={() => {
          setVisible(true);
        }}
        className="absolute bottom-[5rem] right-[5rem] w-[10rem] h-[3rem] bg-GreenLight-30 rounded-full text-white text-center leading-[3rem]"
      >
        질문하기
      </div>
      <div className="w-[55rem] h-full pt-[6rem] overflow-scroll pb-[3rem]">
        <div>
          <div className="w-full border-b-[0.1rem] text-[1.5rem] border-GrayScale-30 pt-[5%]">
            공동구매 질문
          </div>
        </div>
        <Question />
      </div>
    </div>
  );
};

export default QuestionPage;
