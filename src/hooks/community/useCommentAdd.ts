import { customAxios } from "@/lib/axios/customAxios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const onComment = async (id: string, content: string) => {
  const { data } = await customAxios.post("/api/board/comment/" + id, null, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
};

const useCommentMutation = (id: string, content: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => onComment(id, content), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["comment", id]);
      toast.success("댓글 작성 성공!");
    },
    onError: () => {
      toast.error("댓글 작성 실패!");
    },
  });
};

export default useCommentMutation;
