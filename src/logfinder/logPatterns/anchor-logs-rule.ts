export const provideLiquidityRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "provide_liquidity"],
    ["assets"],
    ["share"],
    ["contract_address"],
    ["action", "mint"],
    ["to"],
    ["amount"]
  ]
});

export const depositStableRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action"],
    ["depositor"],
    ["mint_amount"],
    ["deposit_amount"],
    ["contract_address"],
    ["action"],
    ["to"],
    ["amount"]
  ]
});

export const redeemStableRule = (
  marketAddress: string,
  aUSTAddress: string
) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", aUSTAddress],
    ["action", "send"],
    ["from"],
    ["to", marketAddress],
    ["amount"],
    ["contract_address", marketAddress],
    ["action", "redeem_stable"],
    ["burn_amount"],
    ["redeem_amount"],
    ["contract_address", aUSTAddress],
    ["action", "burn"],
    ["from", marketAddress],
    ["amount"]
  ]
});

export const bondLunaRule = (hubAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", hubAddress],
    ["action", "mint"],
    ["from"],
    ["bonded"],
    ["minted"],
    ["contract_address"],
    ["action", "mint"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"]
  ]
});

export const unbondLunaRule = (bLunaAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", bLunaAddress],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["burnt_amount"],
    ["unbonded_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"]
  ]
});

export const withdrawUnbondedRule = (hubAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", hubAddress],
    ["action", "finish_burn"],
    ["from", hubAddress],
    ["amount"]
  ]
});

export const claimRewardRule = (rewardAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", rewardAddress],
    ["action", "claim_reward"],
    ["holder_address"],
    ["rewards"]
  ]
});

export const depositCollateralRule = (
  bLunaCustodyAddress: string,
  bLunaAddress: string
) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", bLunaAddress],
    ["action", "send"],
    ["from"],
    ["to", bLunaCustodyAddress],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address", bLunaCustodyAddress],
    ["action", "deposit_collateral"],
    ["borrower"],
    ["amount"]
  ]
});

export const lockCollateralRule = (bLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "lock_collateral"],
    ["borrower"],
    ["collaterals"],
    ["contract_address", bLunaCustodyAddress],
    ["action"],
    ["borrower"],
    ["amount"]
  ]
});

export const unlockCollateralRule = (bLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "unlock_collateral"],
    ["borrower"],
    ["collaterals"],
    ["contract_address", bLunaCustodyAddress],
    ["action"],
    ["borrower"],
    ["amount"]
  ]
});

export const withdrawCollateralRule = (bLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", bLunaCustodyAddress],
    ["action", "withdraw_collateral"],
    ["borrower"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"]
  ]
});

export const borrowStableRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action", "borrow_stable"],
    ["borrower"],
    ["borrow_amount"]
  ]
});

export const repayStableRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action", "repay_stable"],
    ["borrower"],
    ["repay_amount"]
  ]
});

export const ustSwapRule = (ancAddress: string, pairAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", ancAddress],
    ["action", "send"],
    ["from"],
    ["to", pairAddress],
    ["amount"],
    ["contract_address", pairAddress],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount", ancAddress],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"]
  ]
});

export const stakeLPRule = (
  lpTokenAddress: string,
  lpStakingAddress: string
) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", lpTokenAddress],
    ["action", "send"],
    ["from"],
    ["to", lpStakingAddress],
    ["amount"],
    ["contract_address", lpStakingAddress],
    ["action", "bond"],
    ["owner"],
    ["amount"]
  ]
});

export const unstakeLPRule = (lpStakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", lpStakingAddress],
    ["action", "unbond"],
    ["owner"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
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

export const lpStakingRewardRule = (lpStakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", lpStakingAddress],
    ["action", "withdraw"],
    ["owner"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const borrowRewardsRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action", "claim_rewards"],
    ["claim_amount"],
    ["contract_address"],
    ["action", "spend"],
    ["recipient"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"]
  ]
});

export const govStakeRule = (ancAddress: string, govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", ancAddress],
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

export const createPollRule = (ancAddress: string, govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", ancAddress],
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
