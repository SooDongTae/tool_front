import axios from "axios";

export const SetUserToken = async (code: string) => {
  const headers = { authCode: code };
  try {
    const { data } = await axios.post("/api/auth/oauth/bsm", null, { headers });
    localStorage.setItem("accessToken", data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
