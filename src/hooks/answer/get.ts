import { customAxios } from "@/lib/axios/customAxios";
import axios from "axios";
import { useQuery } from "react-query";

const getAnswer = async (id: string) => {
  const { data } = await customAxios.get(`/api/comment/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};

const useAnswer = (id: string) => {
  const { data: answer, isLoading } = useQuery(["answer", id], () =>
    getAnswer(id)
  );
  return { answer, isLoading };
};

export default useAnswer;
