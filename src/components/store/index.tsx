import { atom } from "recoil";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
