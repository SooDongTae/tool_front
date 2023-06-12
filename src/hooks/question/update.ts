import { customAxios } from "@/lib/axios/customAxios";
import { ICreateQuestion } from "@/types/GroupBuy.type";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const modifyQuestion = async ({ id, form }: ICreateQuestion) => {
  console.log(form);
  const { data } = await customAxios.put(
    `/api/question/${id}`,
    { content: form.content, secret: true },
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
