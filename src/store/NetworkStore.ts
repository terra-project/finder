import { atom } from "recoil";
import { DEFAULT_NETWORK } from "../scripts/utility";

export const Network = atom<string>({
  key: "NetworkState",
  default: DEFAULT_NETWORK
});
