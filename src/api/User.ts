import axios from "axios";

class User {
  GetUserName = async (accessToken: string) => {
    try {
      const { data } = await axios.get("/api/auth/oauth/bsm", {
        headers: { Authorization: accessToken },
      });
      localStorage.setItem("accessToken", data.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  RemoveUserToken = async () => {
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

  SetUserToken = async (code: string) => {
    const headers = { authCode: code };
    try {
      const { data } = await axios.post("/api/auth/oauth/bsm", null, {
        headers,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("expire_at", data.expire_at);
    } catch (e) {
      console.log(e);
    }
  };
}

export default new User();
