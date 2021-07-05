import { Coin } from "@terra-money/terra.js";
import BigNumber from "bignumber.js";
import format from "../../scripts/format";
import { isFinite } from "../../scripts/math";

//1.020 -> 1.02
const NumberFormatRegExp = /\.?0+$/g;

export const coinSet = (str: string, nativeDenoms: string[]): string => {
  if (isFinite(new BigNumber(str))) {
    return format.amount(str).replace(NumberFormatRegExp, "");
  }
  try {
    const coinData = Coin.fromString(str);
    return `${format
      .amount(coinData.amount.toString())
      .replace(NumberFormatRegExp, "")} ${format.denom(coinData.denom)}`;
  } catch {
    return nativeDenoms.includes(str) ? format.denom(str) : str;
  }
};

export const assetFormat = (str: string, nativeDenoms: string[]): string => {
  if (str === ",") {
    return str;
  }

  const array = str.split(",");
  if (array.length > 1) {
    let value: string = "";

    array
      .filter(str => str !== "")
      .forEach((coin, index) => {
        value +=
          index === array.length - 1
            ? `${coinSet(coin, nativeDenoms)}`
            : `${coinSet(coin, nativeDenoms)}, `;
      });

    return value;
  } else {
    return coinSet(str, nativeDenoms);
  }
};
