import axios from "axios";

export const GetAllPartyList = async () => {
  try {
    const response = await axios.get(
      `/api/groupBuying/list?limit=${5}&offset=${0}&sortField=${"views"}&sortWay=${"desc"}&category=${"all"}&title=${""}&status=${"ACTIVATED"}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
