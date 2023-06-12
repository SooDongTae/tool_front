export const QnA = ({
  question,
  answer,
  isLoading,
}: {
  question: string;
  answer: string;
  isLoading: boolean;
}) => {
  console.log(question, answer);
  return (
    <div className="flex items-center flex-col">
      {question !== " " ? (
        <div className="chatbot-wrapper justify-end">
          <div className="chatbot-text bg-GreenLight-30 text-white">{question}</div>
        </div>
      ) : null}
      <div className="chatbot-wrapper justify-start">
        <div className="chatbot-text bg-GrayScale-10">{isLoading ? "..." : answer}</div>
      </div>
    </div>
  );
};
