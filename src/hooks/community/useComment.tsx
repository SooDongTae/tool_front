import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";
const onRequest = async (id: string) => {
  const { data } = await customAxios.get("/api/comment/" + id, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useComment = (id: string) => {
  const { data: commentList, isLoading } = useQuery(["comment", id], () =>
    onRequest(id)
  );
  return { commentList, isLoading };
};

export default useComment;
