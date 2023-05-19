import axios from "axios";
import { useQuery } from "react-query";

const getParty = async (id: string) => {
  const { data } = await axios.get(`/api/groupBuying/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};
const useGroupBuy = (id: string) => {
  const { data: party, isLoading } = useQuery(["groupBuy", id], () =>
    getParty(id)
  );
  return { party, isLoading };
};

export default useGroupBuy;
