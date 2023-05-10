import { FormType } from "@/types/Party.type";
import axios from "axios";

export const CreateParty = async (data: FormData) => {
  try {
    const response = await axios.post(`/api/groupBuying/create`, data, {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
