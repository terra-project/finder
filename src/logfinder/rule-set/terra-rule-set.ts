import {
  msgSendRule,
  msgWithdrawDelegationRewardRule,
  msgVoteRule,
  msgSubmitProposalRule,
  msgDepositRule,
  msgSwapRule,
  msgExchangeRateVoteRule,
  msgExchangeRatePrevoteRule,
  msgAggregateExchangeRateVoteRule,
  msgAggregateExchangeRatePrevoteRule,
  msgUnjailRule,
  msgUndelegateRule,
  msgEditValidatorRule,
  msgDelegateRule,
  msgCreateValidatorRule,
  msgBeginRedelegateRule,
  msgStoreCodeRule,
  msgMigrateContractRule,
  msgInstantiateContractRule,
  msgSwapTerraSwapRule
} from "../logPatterns/terra-logs-rule";
import { LogFindersRuleSet } from "../types";

export const terraRuleSet = () => {
  const msgSendRuleSet: LogFindersRuleSet = {
    rule: msgSendRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/send",
      canonicalMsg: [
        `${matched[1].value} send ${matched[2].value} to ${matched[0].value}`
      ],
      payload: fragment
    })
  };

  const msgWithdrawDelegationRewardRuleSet: LogFindersRuleSet = {
    rule: msgWithdrawDelegationRewardRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/withdraw-delegation-reward",
      canonicalMsg: [`Withdraw ${matched[0].value} from ${matched[1].value}`],
      amountIn: `${matched[0].value}`,
      payload: fragment
    })
  };

  const msgVoteRuleSet: LogFindersRuleSet = {
    rule: msgVoteRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/vote",
      canonicalMsg: [
        `Vote ${matched[0].value} (Proposal ID: ${matched[1].value})`
      ],
      payload: fragment
    })
  };

  const msgSubmitProposalRuleSet: LogFindersRuleSet = {
    rule: msgSubmitProposalRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/submit-proposal",
      canonicalMsg: [`Create proposal (Proposal ID: ${matched[0].value})`],
      payload: fragment
    })
  };

  const msgDepositRuleSet: LogFindersRuleSet = {
    rule: msgDepositRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/deposit",
      canonicalMsg: [
        `Deposit ${matched[0].value} (Proposal ID: ${matched[1].value})`
      ],
      amountOut: `${matched[0].value}`,
      payload: fragment
    })
  };

  const msgSwapRuleSet: LogFindersRuleSet = {
    rule: msgSwapRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/swap",
      canonicalMsg: [`Swap ${matched[0].value} for ${matched[3].value}`],
      amountIn: `${matched[3].value}`,
      amountOut: `${matched[0].value}`,
      payload: fragment
    })
  };

  const msgExchangeRateVoteRuleSet: LogFindersRuleSet = {
    rule: msgExchangeRateVoteRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/exchange-rate-vote",
      canonicalMsg: [`???`],
      payload: fragment
    })
  };

  const msgExchangeRatePrevoteRuleRuleSet: LogFindersRuleSet = {
    rule: msgExchangeRatePrevoteRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/exchange-rate-prevote",
      canonicalMsg: [`???`],
      payload: fragment
    })
  };

  const msgAggregateExchangeRateVoteRuleSet: LogFindersRuleSet = {
    rule: msgAggregateExchangeRateVoteRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/aggregate-exchange-rate-vote",
      canonicalMsg: [`???`],
      payload: fragment
    })
  };

  const msgAggregateExchangeRatePrevoteRuleSet: LogFindersRuleSet = {
    rule: msgAggregateExchangeRatePrevoteRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/aggregate-exchange-rate-prevote",
      canonicalMsg: [`???`],
      payload: fragment
    })
  };

  const msgUnjailRuleSet: LogFindersRuleSet = {
    rule: msgUnjailRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/unjail",
      canonicalMsg: [`Unjail ${matched[2].value}`],
      payload: fragment
    })
  };

  const msgUndelegateRuleSet: LogFindersRuleSet = {
    rule: msgUndelegateRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/undelegete",
      canonicalMsg: [
        `Undelegete ${matched[1].value}uluna to ${matched[0].value}`
      ],
      amountIn: `${matched[1].value}uluna`,
      payload: fragment
    })
  };

  const msgEditValidatorRuleSet: LogFindersRuleSet = {
    rule: msgEditValidatorRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/edit-validator",
      canonicalMsg: [`Edit ${matched[2].value}`],
      payload: fragment
    })
  };

  const msgDelegateRuleSet: LogFindersRuleSet = {
    rule: msgDelegateRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/delegate",
      canonicalMsg: [
        `Delegate ${matched[1].value}uluna to ${matched[0].value}`
      ],
      amountOut: `${matched[1].value}uluna`,
      payload: fragment
    })
  };

  const msgCreateValidatorRuleSet: LogFindersRuleSet = {
    rule: msgCreateValidatorRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/create-validator",
      canonicalMsg: [`Create ${matched[0].value}`],
      payload: fragment
    })
  };

  const msgBeginRedelegateRuleSet: LogFindersRuleSet = {
    rule: msgBeginRedelegateRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/begin-redelegate",
      canonicalMsg: [`Redelegate ${matched[2].value} to ${matched[1].value}`],
      payload: fragment
    })
  };

  const msgStoreCodeRuleSet: LogFindersRuleSet = {
    rule: msgStoreCodeRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/store-code",
      canonicalMsg: [`Store ${matched[1].value}`],
      payload: fragment
    })
  };

  const msgMigrateContractRuleSet: LogFindersRuleSet = {
    rule: msgMigrateContractRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/migrate-contract",
      canonicalMsg: [`Migrate ${matched[1].value} to code ${matched[0].value}`],
      payload: fragment
    })
  };

  const msgInstantiateContractRuleSet: LogFindersRuleSet = {
    rule: msgInstantiateContractRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/instantiate-contract",
      canonicalMsg: [
        `Instantiate ${matched[2].value} to code ${matched[1].value}`
      ],
      payload: fragment
    })
  };

  const msgSwapTerraSwapRuleSet: LogFindersRuleSet = {
    rule: msgSwapTerraSwapRule(),
    transform: (fragment, matched) => ({
      msgType: "terra/swap",
      canonicalMsg: [
        `Swap ${matched[4].value}${matched[2].value} for ${matched[5].value}${matched[3].value}`
      ],
      amountIn: `${matched[5].value}${matched[3].value}`,
      amountOut: `${matched[4].value}${matched[2].value}`,
      payload: fragment
    })
  };

  return [
    msgSendRuleSet,
    msgWithdrawDelegationRewardRuleSet,
    msgVoteRuleSet,
    msgSubmitProposalRuleSet,
    msgDepositRuleSet,
    msgSwapRuleSet,
    msgExchangeRateVoteRuleSet,
    msgExchangeRatePrevoteRuleRuleSet,
    msgAggregateExchangeRateVoteRuleSet,
    msgAggregateExchangeRatePrevoteRuleSet,
    msgUnjailRuleSet,
    msgUndelegateRuleSet,
    msgEditValidatorRuleSet,
    msgDelegateRuleSet,
    msgCreateValidatorRuleSet,
    msgBeginRedelegateRuleSet,
    msgStoreCodeRuleSet,
    msgMigrateContractRuleSet,
    msgInstantiateContractRuleSet,
    msgSwapTerraSwapRuleSet
  ];
};
