export const provideLiquidityRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "provide_liquidity"],
    ["assets"],
    ["share"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["by"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["to"],
    ["amount"]
  ]
});

export const withdrawLiquidityRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action", "withdraw_liquidity"],
    ["withdrawn_share"],
    ["refund_assets"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"]
  ]
});

export const withdrawLiquidityRule2 = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action", "withdraw_liquidity"],
    ["withdrawn_share"],
    ["refund_assets"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"]
  ]
});

export const ustToTokenSwapRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount"],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const transferRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "transfer"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});
