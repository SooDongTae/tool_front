import { customAxios } from "@/lib/axios/customAxios";
import { GetPartyListType } from "@/types/Party.type";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
interface IPost {
  title?: string;
  page?: number;
  category?: string;
}
const onRequest = async (criteria: IPost) => {
  const { data } = await customAxios.get(
    `/api/board/list?size=8&page=${criteria.page}&title=${criteria.title}&category=all`,
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

const usePostList = (criteria: IPost) => {
  const { data: postList, isLoading } = useQuery(["post", criteria], () =>
    onRequest(criteria)
  );
  return { postList, isLoading };
};

export default usePostList;
