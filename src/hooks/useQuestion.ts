import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { toast } from "react-toastify";

const getQuestionList = async (id: string) => {
  const { data } = await axios.get(`/api/question/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};
interface ICreateQuestion {
  id: string;
  content: string;
  isSecret: boolean;
}
const createQuestion = async ({ id, content, isSecret }: ICreateQuestion) => {
  const { data } = await axios.post(
    `/api/question/${id}`,
    {
      content: content,
      isSecret: isSecret,
    },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
      },
    }
  );
  return data;
};
const useQuestion = (id: string) => {
  const { data: questions, isLoading } = useQuery(["question", id], () =>
    getQuestionList(id)
  );
  return { questions, isLoading };
};
const useQuestionMutate = (form: ICreateQuestion) => {
  const queryClient = useQueryClient();
  return useMutation(() => createQuestion(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("질문 생성 성공!");
    },
    onError: () => {
      toast.error("질문 생성 실패!");
    },
  });
};

export default useQuestion;
