import { ICreateQuestion } from "@/types/GroupBuy.type";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const modifyQuestion = async (form: ICreateQuestion) => {
  const { data } = await axios.put(
    `/api/question/${form.id}`,
    { content: form.content, secret: form.isSecret },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    }
  );
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
