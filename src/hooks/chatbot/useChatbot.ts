import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";

const onRequest = async (question: string) => {
  const { data } = await customAxios.post(`api/chat`, question);
  return data;
};

const useChatbot = (question: string) => {
  const { data: answer, isLoading } = useQuery(
    ["chatbot", question],
    () => onRequest(question),
    { retry: 1 }
  );
  return { answer, isLoading };
};

export default useChatbot;
