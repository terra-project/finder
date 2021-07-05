import { atom } from "recoil";

export const Transactions = atom<TxResponse[]>({
  key: "TransactionState",
  default: []
});
