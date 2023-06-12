import { customAxios } from "@/lib/axios/customAxios";
import { IPost } from "@/types/Post.type";
import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
export const onWrite = async (post: IPost, category: string) => {
  const { data } = await customAxios.post(
    `/api/board`,
    { ...post, category: category },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return data;
};
const useWriteMutation = (post: IPost, category: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => onWrite(post, category), {
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries(["post"]);
      toast.success("글 작성 성공!");
      router.push("/detail/" + res);
    },
    onError: () => {
      toast.error("글 작성 실패!");
      router.push("/community");
    },
  });
};
export default useWriteMutation;
