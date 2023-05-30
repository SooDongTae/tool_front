import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const deleteQuestion = async (form: ICreateQuestion) => {
  const { data } = await axios.put(`/api/question/${form.id}`, form, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useDeleteQuestion = (form: ICreateQuestion) => {
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
