import { customAxios } from "@/lib/axios/customAxios";
import { GetPartyListType } from "@/types/Party.type";
import { useInfiniteQuery } from "react-query";

const onRequest = async (criteria: GetPartyListType) => {
  const { data } = await customAxios.get(
    `/api/groupBuying/list?size=${8}&page=${criteria.offset}&sortField=${
      criteria.sortField
    }&sortWay=${"desc"}&category=${criteria.category}&title=${
      criteria.title
    }&status=${"ACTIVATED"}`
  );
  return data;
};

const usePartyList = (criteria: GetPartyListType) => {
  const {
    data: partyList,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["party", criteria],
    ({ pageParam = 1 }) => {
      return onRequest({ ...criteria, offset: pageParam });
    },
    {
      retry: false,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.maxPage <= pages?.length) return false;
        return pages?.length + 1;
      },
    }
  );
  return { partyList, fetchNextPage, isLoading, hasNextPage };
};

export default usePartyList;
