import { atom, atomFamily } from "recoil";

export const questionState = atomFamily({
  key: "question",
  default: {
    isClicked: false,
    showOption: false,
  },
});
