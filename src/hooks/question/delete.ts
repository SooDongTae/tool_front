import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const deleteQuestion = async (form: ICreateQuestion) => {
  const { data } = await customAxios.delete(`/api/question/${form.id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation((form: ICreateQuestion) => deleteQuestion(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("질문 삭제 성공!");
    },
    onError: () => {
      toast.error("질문 삭제 실패!");
    },
  });
};

export default useDeleteQuestion;
