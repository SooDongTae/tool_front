import axios from "axios";
import { useQuery } from "react-query";

const getAnswer = async (id: string) => {
  const { data } = await axios.get(`/api/answer/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};

const useAnswer = (id: string) => {
  const { data: answer, isLoading } = useQuery(["answer", id], () =>
    getAnswer(id)
  );
  return { answer, isLoading };
};

export default useAnswer;
