import axios from "axios";

export const SetUserToken = async (code: string) => {
  const headers = { authCode: code };
  try {
    const { data } = await axios.post("/api/auth/oauth/bsm", null, { headers });
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("expire_at", data.expire_at);
  } catch (e) {
    console.log(e);
  }
};
