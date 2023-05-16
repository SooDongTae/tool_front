import { atom } from "recoil";
export const InitUserState = {
  id: 0,
  grade: 0,
  stuNo: 0,
  name: "",
  classNo: 0,
};

export const userState = atom({
  key: "user",
  default: InitUserState,
});
