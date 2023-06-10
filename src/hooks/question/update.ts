import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import qs from "qs";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const modifyQuestion = async ({ id, form }: ICreateQuestion) => {
  const { data } = await customAxios.put(`/api/question/${id}`, form, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useModifyQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation((form: ICreateQuestion) => modifyQuestion(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("질문 수정 성공!");
    },
    onError: () => {
      toast.error("질문 수정 실패!");
    },
  });
};

export default useModifyQuestion;
