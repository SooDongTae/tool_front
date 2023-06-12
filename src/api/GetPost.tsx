import { customAxios } from "@/lib/axios/customAxios";
import axios from "axios";

export const GetPost = async (id: string | string[] | undefined) => {
  console.log(id);
  const { data } = await customAxios.get("/api/board/" + id, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  console.log(data);
  return data;
};

const usePost = (id: string | string[] | undefined) => {
  return GetPost(id);
};

export default usePost;
