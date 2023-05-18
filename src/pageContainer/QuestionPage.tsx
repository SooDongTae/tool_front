import Question from "@/components/QnA/Question";
import React, { useState } from "react";
import Modal from "react-modal";

const QuestionPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        className="absolute w-[50%] h-[50%] left-[25%] top-[25%] bg-GrayScale-10 rounded-[2rem] focus:outline-none"
      >
        <div className="w-full h-full">
          <input
            className="w-[70%] h-[10%]"
            placeholder="질문을 입력해주세요."
          />
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
