import axios from "axios";

export const GetPost = async (id: string | string[] | undefined) => {
  if (typeof window !== "undefined") {
    const { data } = await axios.get("/api/board/" + id, {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    });
    return data;
  }
};

export default GetPost;
