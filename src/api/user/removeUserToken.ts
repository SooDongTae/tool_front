import axios from "axios";
export const RemoveUserToken = async () => {
  try {
    localStorage.removeItem("accessToken");
  } catch (e) {
    console.log(e);
  }
};
