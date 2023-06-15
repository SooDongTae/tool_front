import useChatbot from "@/hooks/chatbot/useChatbot";
import { useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { QnA } from "../QnA";
import Image from "next/image";
export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState<string[]>([" "]);
  const { answer, isLoading } = useChatbot(questions[questions.length - 1]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    if (!isLoading) {
      setAnswers([...answers, answer]);
    }
  }, [answer, isLoading]);
  const textareaRef = useRef<any>();
  const ResizeHandler = (e: any) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    setText(e.target.value);
  };
  const SubmitHandler = async () => {
    setQuestions([...questions, text]);
    setText("");
  };
  const QandA = useMemo(
    () =>
      questions.map((item, idx) => {
        return (
          <QnA
            answer={answers[idx]}
            question={item}
            key={idx}
            isLoading={isLoading && idx == questions.length - 1}
          />
        );
      }),
    [answers, questions]
  );
  return (
    <>
      {open ? (
        <div className="fixed right-10 bottom-28  w-[25rem] h-[40rem] shadow-2xl bg-white flex flex-col rounded-lg z-50">
          <div className="flex justify-center items-center h-[4rem] min-h-[4rem] bg-GreenLight-30 text-white text-2xl font-bold rounded-t-lg shadow-md">
            Tool 문의채널
          </div>
          <div className="h-full flex flex-col text-lg overflow-auto pb-4">
            {QandA}
          </div>

          <div
            className="bottom-0 border-GrayScale-20 border-t-[.5px] w-full flex"
            onSubmit={SubmitHandler}
          >
            <textarea
              rows={1}
              ref={textareaRef}
              className="w-[85%] overflow-hidden text-lg  focus:outline-none p-4 rounded-bl-lg resize-none"
              placeholder="질문을 입력해주세요"
              onChange={ResizeHandler}
              value={text}
            />
            <button
              type="submit"
              className="w-[15%] flex justify-center items-center cursor-pointer"
              onClick={SubmitHandler}
            >
              <AiOutlineSend size={"1.5rem"} className="text-GreenLight-30" />
            </button>
          </div>
        </div>
      ) : null}
      <div
        className="fixed bg-white right-10 bottom-10 w-[4rem] h-[4rem] shadow-[rgba(0,_0,_0,_0.1)_0px_4px_16px_0px] hover:border-GreenLight-30 border-[.5px] border-GrayScale-15 cursor-pointer  duration-300 rounded-[25px] flex justify-center items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <AiOutlineClose size={"3rem"} className="text-GreenLight-30" />
        ) : (
          <Image src="/chat.png" width={100} height={100}  alt="챗봇 이미지" />
        )}
      </div>
    </>
  );
};
