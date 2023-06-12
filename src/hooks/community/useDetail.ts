import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";
const onRequest = async (id: string | undefined | string[]) => {
  const { data } = await customAxios.get("api/board/" + id, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const usePostDetail = (id: string | undefined | string[]) => {
  const { data: postDetail, isLoading } = useQuery(["detail", id], () =>
    onRequest(id)
  );
  return { postDetail, isLoading };
};

export default usePostDetail;
