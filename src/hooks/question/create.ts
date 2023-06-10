import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const createQuestion = async (form: ICreateQuestion) => {
  const { data } = await customAxios.post(`/api/question/${form.id}`, form, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useCreateQuestion = (form: ICreateQuestion) => {
  const queryClient = useQueryClient();
  return useMutation((form: ICreateQuestion) => createQuestion(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("질문 생성 성공!");
    },
    onError: () => {
      toast.error("질문 생성 실패!");
    },
  });
};

export default useCreateQuestion;
