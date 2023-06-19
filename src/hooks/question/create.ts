import { groupId } from "@/context/selectedGroupState";
import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const createQuestion = async ({ id, form }: ICreateQuestion) => {
  const { data } = await customAxios.post(`/api/question/${id}`, form, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useCreateQuestion = ({ id, form }: ICreateQuestion) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, form }: ICreateQuestion) => createQuestion({ id: id, form: form }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["question", id]);
        toast.success("질문 생성 성공!");
      },
      onError: () => {
        toast.error("질문 생성 실패!");
      },
    }
  );
};

export default useCreateQuestion;
