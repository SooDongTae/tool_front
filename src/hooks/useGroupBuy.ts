import { customAxios } from "@/lib/axios/customAxios";
import axios from "axios";
import { useQuery } from "react-query";

const getParty = async (id: string) => {
  const { data } = await customAxios.get(`/api/groupBuying/${id}`, {});
  return data;
};
const useGroupBuy = (id: string) => {
  const { data: party, isLoading } = useQuery(["groupBuy", id], () =>
    getParty(id)
  );
  return { party, isLoading };
};

export default useGroupBuy;
