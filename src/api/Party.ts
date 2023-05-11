import { GetPartyListType } from "@/types/Party.type";
import axios from "axios";
import { QueryClient } from "react-query";

class Party {
  CreateParty = async (data: FormData, queryClient: QueryClient) => {
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
  GetAllPartyList = async (criteria: GetPartyListType) => {
    try {
      const response = await axios.get(
        `/api/groupBuying/list?limit=${5}&offset=${0}&sortField=${"views"}&sortWay=${"desc"}&category=${
          criteria.category
        }&title=${criteria.title}&status=${"ACTIVATED"}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
}
export default new Party();
