import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const getQuestionList = async (id: string) => {
  const { data } = await customAxios.get(`/api/question/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};

const useQuestion = (id: string) => {
  const { data: questions, isLoading } = useQuery(["question", id], () =>
    getQuestionList(id)
  );
  return { questions, isLoading };
};

export default useQuestion;
