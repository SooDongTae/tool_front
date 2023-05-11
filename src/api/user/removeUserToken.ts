import axios from "axios";
export const RemoveUserToken = async () => {
  try {
    await axios.delete("/api/auth/logout", {
      data: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expire_at");
  } catch (e) {
    console.log(e);
  }
};
