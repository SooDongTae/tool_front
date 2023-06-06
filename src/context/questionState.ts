import { atom } from "recoil";

export const questionState = atom({
  key: "question",
  default: {
    isClicked: false,
    showOption: false,
  },
});
