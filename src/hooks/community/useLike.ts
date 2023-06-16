import { customAxios } from "@/lib/axios/customAxios";
import { useMutation, useQueryClient } from "react-query";

const onLike = async (id: string) => {
  const { data } = await customAxios.post("/api/board/like/" + id, null, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
};

const useLikeMutation = (id: string) => {
  const queryClient = useQueryClient();
  console.log("HIHI")
  return useMutation(() => onLike(id), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["detail", id]);
    },
    onError: () => {},
  });
};

export default useLikeMutation;
