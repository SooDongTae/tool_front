import { GetPartyListType } from "@/types/Party.type";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

const onRequest = async (criteria: GetPartyListType) => {
  const { data } = await axios.get(
    `/api/groupBuying/list?size=${8}&page=${criteria.offset}&sortField=${
      criteria.sortField
    }&sortWay=${"asc"}&category=${criteria.category}&title=${
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
    ["party"],
    ({ pageParam = 1 }) => {
      console.log("pageParam", pageParam);
      return onRequest({ ...criteria, offset: pageParam });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.maxPage === pages?.length) return false;
        return pages?.length + 1;
      },
    }
  );
  return { partyList, fetchNextPage, isLoading, hasNextPage };
};

export default usePartyList;
