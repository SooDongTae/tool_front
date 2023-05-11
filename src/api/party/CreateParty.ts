import axios from "axios";
import { QueryClient } from "react-query";

export const CreateParty = async (data: FormData, queryClient: QueryClient) => {
  try {
    const response = await axios.post(`/api/groupBuying/create`, data, {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    queryClient.invalidateQueries(["party"]);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
