import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";

const getHistory = async () => {
  const { data } = await customAxios.get("/api/groupBuying/joinedGroupBuying", {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
const useHistory = () => {
  const { data: history, isLoading } = useQuery(["history"], () =>
    getHistory()
  );
  return { history, isLoading };
};

export default useHistory;
