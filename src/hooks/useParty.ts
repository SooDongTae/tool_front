import { GetPartyListType } from "@/types/Party.type";
import axios from "axios";
import { useQuery } from "react-query";

const onRequest = async (criteria: GetPartyListType) => {
  const { data } = await axios.get(
    `/api/groupBuying/list?limit=${20}&offset=${0}&sortField=${"views"}&sortWay=${"desc"}&category=${
      criteria.category
    }&title=${criteria.title}&status=${"ACTIVATED"}`
  );
  return data;
};

const usePartyList = (criteria: GetPartyListType) => {
  const { data: partyList, isLoading } = useQuery(
    ["party", criteria.title, criteria.category],
    () => onRequest(criteria),
    {
      retry: 1,
    }
  );
  return { partyList, isLoading };
};

export default usePartyList;
