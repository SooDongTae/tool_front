import { customAxios } from "@/lib/axios/customAxios";
import { IAnswer } from "@/types/GroupBuy.type";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const createAnswer = async (form: IAnswer) => {
  const { data } = await customAxios.post(
    `/api/answer/${form.id}`,
    { content: form.content },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return data;
};

const useCreateAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation((form: IAnswer) => createAnswer(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["answer"]);
      toast.success("답변 성공!");
    },
    onError: () => {
      toast.error("답변 실패!");
    },
  });
};

export default useCreateAnswer;
