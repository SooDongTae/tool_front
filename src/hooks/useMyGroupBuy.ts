import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";

const getMyGroupBuy = async () => {
  const { data } = await customAxios.get("/api/groupBuying/myGroupBuying", {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
const useMyGroupBuy = () => {
  const { data: myGroupBuy, isLoading } = useQuery(["myGroupBuy"], () =>
    getMyGroupBuy()
  );
  return { myGroupBuy, isLoading };
};

export default useMyGroupBuy;
