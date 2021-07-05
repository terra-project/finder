export const msgSendRule = () => ({
  type: "transfer",
  attributes: [["recipient"], ["sender"], ["amount"]],
});

export const msgWithdrawDelegationRewardRule = () => ({
  type: "withdraw_rewards",
  attributes: [["amount"], ["validator"]],
});

export const msgVoteRule = () => ({
  type: "proposal_vote",
  attributes: [["option"], ["proposal_id"]],
});

export const msgSubmitProposalRule = () => ({
  type: "submit_proposal",
  attributes: [["proposal_id"], ["proposal_type"], ["voting_period_start"]],
});

export const msgDepositRule = () => ({
  type: "proposal_deposit",
  attributes: [["amount"], ["proposal_id"]],
});

export const msgSwapRule = () => ({
  type: "swap",
  attributes: [
    ["offer"],
    ["trader"],
    ["recipient"],
    ["swap_coin"],
    ["swap_fee"],
  ],
});

export const msgSwapTerraSwapRule = () => ({
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
  ],
});

export const msgExchangeRateVoteRule = () => ({
  type: "vote",
  attributes: [["denom"], ["voter"], ["exchange_rate"], ["feeder"]],
});

export const msgExchangeRatePrevoteRule = () => ({
  type: "prevote",
  attributes: [["denom"], ["voter"], ["feeder"]],
});

export const msgAggregateExchangeRateVoteRule = () => ({
  type: "aggregate_vote",
  attributes: [["voter"], ["exchange_rate"], ["feeder"]],
});

export const msgAggregateExchangeRatePrevoteRule = () => ({
  type: "aggregate_prevote",
  attributes: [["voter"], ["feeder"]],
});

export const msgUnjailRule = () => ({
  type: "message",
  attributes: [["action", "unjail"], ["module", "slashing"], ["sender"]],
});

export const msgUndelegateRule = () => ({
  type: "unbond",
  attributes: [["validator"], ["amount"], ["completion_time"]],
});

export const msgEditValidatorRule = () => ({
  type: "message",
  attributes: [["action", "edit_validator"], ["module", "staking"], ["sender"]],
});

export const msgDelegateRule = () => ({
  type: "delegate",
  attributes: [["validator"], ["amount"]],
});

export const msgCreateValidatorRule = () => ({
  type: "create_validator",
  attributes: [["validator"], ["amount"]],
});

export const msgBeginRedelegateRule = () => ({
  type: "redelegate",
  attributes: [
    ["source_validator"],
    ["destination_validator"],
    ["amount"],
    ["completion_time"],
  ],
});

export const msgStoreCodeRule = () => ({
  type: "store_code",
  attributes: [["sender"], ["code_id"]],
});

export const msgMigrateContractRule = () => ({
  type: "migrate_contract",
  attributes: [["code_id"], ["contract_address"]],
});

export const msgInstantiateContractRule = () => ({
  type: "instantiate_contract",
  attributes: [["owner"], ["code_id"], ["contract_address"]],
});
