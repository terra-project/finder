import { atom } from "recoil";

export const Contracts = atom<any>({
  key: "ContractState",
  default: []
});
