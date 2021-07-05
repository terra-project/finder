export const openPositionRule = (mintAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", mintAddress],
    ["action", "open_position"],
    ["position_idx"],
    ["mint_amount"],
    ["collateral_amount"],
    ["contract_address"],
    ["action"],
    ["to"],
    ["amount"]
  ]
});

export const depositRule = (mintAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", mintAddress],
    ["action", "deposit"],
    ["position_idx"],
    ["deposit_amount"]
  ]
});

export const withdrawRule = (mintAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", mintAddress],
    ["action", "withdraw"],
    ["position_idx"],
    ["withdraw_amount"],
    ["tax_amount"],
    ["protocol_fee"]
  ]
});

export const burnRule = (mintAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", mintAddress],
    ["amount"],
    ["contract_address", mintAddress],
    ["action", "burn"],
    ["position_idx"],
    ["burn_amount"],
    ["contract_address"],
    ["action", "burn"],
    ["from"],
    ["amount"]
  ]
});

export const stakeLPRule = (stakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", stakingAddress],
    ["amount"],
    ["contract_address", stakingAddress],
    ["action", "bond"],
    ["asset_token"],
    ["amount"]
  ]
});

export const unstakeLPRule = (stakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", stakingAddress],
    ["action", "unbond"],
    ["asset_token"],
    ["amount"],
    ["contract_address"],
    ["action", "transfer"],
    ["from", stakingAddress],
    ["to"],
    ["amount"]
  ]
});

export const lpStakingRewardRule = (stakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", stakingAddress],
    ["action", "withdraw"],
    ["amount"],
    ["contract_address"],
    ["action", "transfer"],
    ["from", stakingAddress],
    ["to"],
    ["amount"]
  ]
});

export const govStakeRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", govAddress],
    ["amount"],
    ["contract_address", govAddress],
    ["action", "staking"],
    ["sender"],
    ["share"],
    ["amount"]
  ]
});

export const govUnstakeRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", govAddress],
    ["action", "withdraw"],
    ["recipient"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const createPollRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", govAddress],
    ["amount"],
    ["contract_address", govAddress],
    ["action", "create_poll"],
    ["creator"],
    ["poll_id"],
    ["end_height"]
  ]
});

export const castVoteRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", govAddress],
    ["action", "cast_vote"],
    ["poll_id"],
    ["amount"],
    ["voter"],
    ["vote_option"]
  ]
});

export const airdropRule = (airdropAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", airdropAddress],
    ["action", "claim"],
    ["stage"],
    ["address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const buySubmitOrderRule = (limitOrderAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", limitOrderAddress],
    ["action", "submit_order"],
    ["order_id"],
    ["bidder_addr"],
    ["offer_asset"],
    ["ask_asset"]
  ]
});

export const sellSubmitOrderRule = (limitOrderAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", limitOrderAddress],
    ["amount"],
    ["contract_address", limitOrderAddress],
    ["action", "submit_order"],
    ["order_id"],
    ["bidder_addr"],
    ["offer_asset"],
    ["ask_asset"]
  ]
});

export const cancelOrderRule = (limitOrderAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", limitOrderAddress],
    ["action", "cancel_order"],
    ["order_id"],
    ["bidder_refund"]
  ]
});

export const buyExecuteOrderRule = (limitOrderAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "send"],
    ["from"],
    ["to", limitOrderAddress],
    ["amount"],
    ["contract_address", limitOrderAddress],
    ["action", "execute_order"],
    ["order_id"],
    ["executor_receive"],
    ["bidder_receive"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const sellExecuteOrderRule = (limitOrderAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", limitOrderAddress],
    ["action", "execute_order"],
    ["order_id"],
    ["executor_receive"],
    ["bidder_receive"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const transferRule = (tokenAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", tokenAddress],
    ["action", "transfer"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});
