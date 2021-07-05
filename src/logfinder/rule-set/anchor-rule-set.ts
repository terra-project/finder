import { Dictionary } from "ramda";
import { LogFindersRuleSet } from "../types";
import contracts from "../contracts.json";
import {
  bondLunaRule,
  borrowStableRule,
  claimRewardRule,
  depositCollateralRule,
  depositStableRule,
  lockCollateralRule,
  provideLiquidityRule,
  redeemStableRule,
  repayStableRule,
  unbondLunaRule,
  unlockCollateralRule,
  withdrawCollateralRule,
  withdrawUnbondedRule,
  ustSwapRule,
  stakeLPRule,
  unstakeLPRule,
  airdropRule,
  lpStakingRewardRule,
  borrowRewardsRule,
  govStakeRule,
  govUnstakeRule,
  createPollRule,
  castVoteRule
} from "../logPatterns/anchor-logs-rule";

export const anchorRuleSet = (network: string) => {
  const contract = (contracts as Dictionary<Dictionary<string>>)[network];

  const anchorDepositStableRuleSet: LogFindersRuleSet = {
    rule: depositStableRule(contract["anchorMarketAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/deposit-stable",
      canonicalMsg: [
        `Deposit ${matched[4].value}uusd to ${matched[0].value}`,
        `Mint ${matched[3].value}${matched[5].value}`
      ],
      amountIn: `${matched[4].value}uusd`,
      amountOut: `${matched[3].value}${matched[5].value}`,
      payload: fragment
    })
  };

  const anchorRedeemStableRuleSet: LogFindersRuleSet = {
    rule: redeemStableRule(
      contract["anchorMarketAddress"],
      contract["anchoraUSTAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/redeem-stable",
      canonicalMsg: [
        `Withdraw ${matched[7].value}uusd from ${matched[5].value}`,
        `Burn ${matched[7].value}${matched[9].value}`
      ],
      amountIn: `${matched[7].value}uusd`,
      amountOut: `${matched[7].value}${matched[9].value}`,
      payload: fragment
    })
  };

  const anchorBondLunaRuleSet: LogFindersRuleSet = {
    rule: bondLunaRule(contract["anchorbLunaHubAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/bond-luna",
      canonicalMsg: [`Mint ${matched[4].value}${matched[5].value}`],
      amountIn: `${matched[4].value}${matched[5].value}`,
      payload: fragment
    })
  };

  const anchorUnbondLunaRuleSet: LogFindersRuleSet = {
    rule: unbondLunaRule(contract["anchorbLunaAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/unbond-bluna",
      canonicalMsg: [
        `Unbond ${fragment.attributes[4].value}${fragment.attributes[0].value}`,
        `Burn ${fragment.attributes[16].value}${fragment.attributes[0].value}`
      ],
      amountOut: `${fragment.attributes[16].value}${fragment.attributes[0].value}`,
      payload: fragment
    })
  };

  const anchorWithdrawUnbondedRuleSet: LogFindersRuleSet = {
    rule: withdrawUnbondedRule(contract["anchorbLunaHubAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/withdraw-unbonded",
      canonicalMsg: [
        `Withdraw ${matched[3].value}uluna from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}uluna`,
      payload: fragment
    })
  };

  const anchorClaimRewardRuleSet: LogFindersRuleSet = {
    rule: claimRewardRule(contract["anchorbLunaRwardAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/claim-reward",
      canonicalMsg: [
        `Claim ${matched[3].value}uusd rewards from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}uusd`,
      payload: fragment
    })
  };

  const anchorDepositCollateralRuleSet: LogFindersRuleSet = {
    rule: depositCollateralRule(
      contract["anchorbLunaCustodyAddress"],
      contract["anchorbLunaAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/deposit-collateral",
      canonicalMsg: [
        `Deposit ${matched[4].value}${matched[0].value} to ${matched[11].value}`
      ],
      amountOut: `${matched[4].value}${matched[0].value}`,
      payload: fragment
    })
  };

  const anchorLockCollateralRuleSet: LogFindersRuleSet = {
    rule: lockCollateralRule(contract["anchorbLunaCustodyAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/lock-collateral",
      canonicalMsg: [`Lock ${matched[3].value} to ${matched[0].value}`],
      payload: fragment
    })
  };

  const anchorUnlockCollateralRuleSet: LogFindersRuleSet = {
    rule: unlockCollateralRule(contract["anchorbLunaCustodyAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/unlock-collateral",
      canonicalMsg: [`Unlock ${matched[3].value} from ${matched[0].value}`],
      payload: fragment
    })
  };

  const anchorWithdrawCollateralRuleSet: LogFindersRuleSet = {
    rule: withdrawCollateralRule(contract["anchorbLunaCustodyAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/withdraw-collateral",
      canonicalMsg: [
        `Withdraw ${matched[3].value}${matched[4].value} from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}${matched[4].value}`,
      payload: fragment
    })
  };

  const anchorBorrowStableRuleSet: LogFindersRuleSet = {
    rule: borrowStableRule(contract["anchorMarketAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/borrow-stable",
      canonicalMsg: [`Borrow ${matched[3].value}uusd from ${matched[0].value}`],
      amountIn: `${matched[3].value}uusd`,
      payload: fragment
    })
  };

  const anchorRepayStableRuleSet: LogFindersRuleSet = {
    rule: repayStableRule(contract["anchorMarketAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/repay-stable",
      canonicalMsg: [`Repay ${matched[3].value}uusd from ${matched[0].value}`],
      amountOut: `${matched[3].value}uusd`,
      payload: fragment
    })
  };

  const anchorUstSwapRuleSet: LogFindersRuleSet = {
    rule: ustSwapRule(
      contract["anchorANCAddress"],
      contract["anchorANCPairAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/UST-swap",
      canonicalMsg: [
        `Swap ${matched[9].value}${matched[7].value} for ${matched[10].value}${matched[8].value}`
      ],
      amountIn: `${matched[10].value}${matched[8].value}`,
      amountOut: `${matched[9].value}${matched[7].value}`,
      payload: fragment
    })
  };

  const anchorStakeLPRuleSet: LogFindersRuleSet = {
    rule: stakeLPRule(
      contract["anchorAncUstLPAddress"],
      contract["anchorLPStakingAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/stake-lp",
      canonicalMsg: [
        `Stake ${matched[4].value}${matched[0].value} to ${matched[3].value}`
      ],
      amountOut: `${matched[4].value}${matched[0].value}`,
      payload: fragment
    })
  };

  const anchorUnstakeLPRuleSet: LogFindersRuleSet = {
    rule: unstakeLPRule(contract["anchorLPStakingAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/unstake-lp",
      canonicalMsg: [
        `Unstake ${matched[3].value}${matched[4].value} from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}${matched[4].value}`,
      payload: fragment
    })
  };

  const anchorAirdropRuleSet: LogFindersRuleSet = {
    rule: airdropRule(contract["anchorAirdropAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/airdrop",
      canonicalMsg: [
        `Claim ${matched[4].value}${matched[5].value} from Anchor Airdrop`
      ],
      amountIn: `${matched[4].value}${matched[5].value}`,
      payload: fragment
    })
  };

  const anchorLPStakingRewardRuleSet: LogFindersRuleSet = {
    rule: lpStakingRewardRule(contract["anchorLPStakingAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/lp-staking-reward",
      canonicalMsg: [
        `Claim ${matched[3].value}${matched[4].value} rewards from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}${matched[4].value}`,
      payload: fragment
    })
  };

  const anchorBorrowRewardRuleSet: LogFindersRuleSet = {
    rule: borrowRewardsRule(contract["anchorMarketAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/borrow-reward",
      canonicalMsg: [
        `Claim ${matched[2].value}${matched[7].value} rewards from ${matched[0].value}`
      ],
      amountIn: `${matched[2].value}${matched[7].value}`,
      payload: fragment
    })
  };

  const anchorGovStakeRuleSet: LogFindersRuleSet = {
    rule: govStakeRule(
      contract["anchorANCAddress"],
      contract["anchorGovAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/gov-stake",
      canonicalMsg: [
        `Stake ${matched[4].value}${matched[0].value} to ${matched[3].value}`
      ],
      amountOut: `${matched[4].value}${matched[0].value}`,
      payload: fragment
    })
  };

  const anchorGovUntakeRuleSet: LogFindersRuleSet = {
    rule: govUnstakeRule(contract["anchorGovAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/gov-unstake",
      canonicalMsg: [
        `Unstake ${matched[3].value}${matched[4].value} from ${matched[0].value}`
      ],
      amountIn: `${matched[3].value}${matched[4].value}`,
      payload: fragment
    })
  };

  const anchorCreatePollRuleSet: LogFindersRuleSet = {
    rule: createPollRule(
      contract["anchorANCAddress"],
      contract["anchorGovAddress"]
    ),
    transform: (fragment, matched) => ({
      msgType: "anchor/create-poll",
      canonicalMsg: [`Create poll with ID:${matched[8].value}`],
      payload: fragment
    })
  };

  const anchorCastVoteRuleSet: LogFindersRuleSet = {
    rule: castVoteRule(contract["anchorGovAddress"]),
    transform: (fragment, matched) => ({
      msgType: "anchor/cast-vote",
      canonicalMsg: [
        `Vote to poll with ID:${matched[2].value} (${matched[5].value})`
      ],
      payload: fragment
    })
  };

  const anchorProvideLiquidityRuleSet: LogFindersRuleSet = {
    rule: provideLiquidityRule(),
    transform: (fragment, matched) => ({
      msgType: "anchor/provide-liquidity",
      canonicalMsg: [
        `Provide ${matched[2].value} Liquidity to ${matched[0].value}`,
        `Mint ${matched[7].value}${matched[4].value}`
      ],
      amountIn: `${matched[7].value}${matched[4].value}`,
      amountOut: `${matched[2].value}`,
      payload: fragment
    })
  };

  const anchorRuleArray: LogFindersRuleSet[] = [
    anchorProvideLiquidityRuleSet,
    anchorDepositStableRuleSet,
    anchorRedeemStableRuleSet,
    anchorBondLunaRuleSet,
    anchorUnbondLunaRuleSet,
    anchorWithdrawUnbondedRuleSet,
    anchorClaimRewardRuleSet,
    anchorDepositCollateralRuleSet,
    anchorLockCollateralRuleSet,
    anchorUnlockCollateralRuleSet,
    anchorWithdrawCollateralRuleSet,
    anchorBorrowStableRuleSet,
    anchorRepayStableRuleSet,
    anchorUstSwapRuleSet,
    anchorStakeLPRuleSet,
    anchorUnstakeLPRuleSet,
    anchorAirdropRuleSet,
    anchorLPStakingRewardRuleSet,
    anchorBorrowRewardRuleSet,
    anchorGovStakeRuleSet,
    anchorGovUntakeRuleSet,
    anchorCreatePollRuleSet,
    anchorCastVoteRuleSet
  ];

  return anchorRuleArray;
};
