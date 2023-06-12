import { customAxios } from "@/lib/axios/customAxios";
import { useQuery } from "react-query";

const getRequest = async () => {
  const { data } = await customAxios.get("/api/user/joinRequests", {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};

const useRequest = () => {
  const { data: requests, isLoading } = useQuery(["requests"], () =>
    getRequest()
  );
  return { requests, isLoading };
};

export default useRequest;
