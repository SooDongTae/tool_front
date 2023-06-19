import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const InitUserState = {
  id: 0,
  grade: 0,
  stuNo: 0,
  name: "",
  classNo: 0,
  profileUrl: "",
  email: "",
  joinRequests: 0,
};

export const userState = atom({
  key: "user",
  default: InitUserState,
  effects_UNSTABLE: [persistAtom],
});
