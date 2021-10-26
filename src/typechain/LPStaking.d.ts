/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LPStakingInterface extends ethers.utils.Interface {
  functions: {
    "LPToken()": FunctionFragment;
    "OHMToken()": FunctionFragment;
    "accOHMPerShare()": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "getUserBalance(address)": FunctionFragment;
    "lastRewardBlock()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingRewards(address)": FunctionFragment;
    "rewardPerBlock()": FunctionFragment;
    "rewardPool()": FunctionFragment;
    "setRewardPerBlock(uint256)": FunctionFragment;
    "stakeLP(uint256)": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstakeLP()": FunctionFragment;
    "updatePool()": FunctionFragment;
    "userDetails(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "LPToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "OHMToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accOHMPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeLP",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unstakeLP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userDetails", values: [string]): string;

  decodeFunctionResult(functionFragment: "LPToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OHMToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accOHMPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeLP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstakeLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userDetails",
    data: BytesLike
  ): Result;

  events: {
    "PoolUpdated(uint256,uint256,uint256)": EventFragment;
    "RewardsClaimed(address,uint256,uint256)": EventFragment;
    "StakeCompleted(address,uint256,uint256,uint256)": EventFragment;
    "TransferredOwnership(address,address,uint256)": EventFragment;
    "WithdrawCompleted(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferredOwnership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawCompleted"): EventFragment;
}

export type PoolUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    _blocksRewarded: BigNumber;
    _amountRewarded: BigNumber;
    _time: BigNumber;
  }
>;

export type RewardsClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _staker: string;
    _rewardsClaimed: BigNumber;
    _time: BigNumber;
  }
>;

export type StakeCompletedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    _staker: string;
    _amount: BigNumber;
    _totalStaked: BigNumber;
    _time: BigNumber;
  }
>;

export type TransferredOwnershipEvent = TypedEvent<
  [string, string, BigNumber] & {
    _previous: string;
    _next: string;
    _time: BigNumber;
  }
>;

export type WithdrawCompletedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _staker: string;
    _amount: BigNumber;
    _time: BigNumber;
  }
>;

export class LPStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LPStakingInterface;

  functions: {
    LPToken(overrides?: CallOverrides): Promise<[string]>;

    OHMToken(overrides?: CallOverrides): Promise<[string]>;

    accOHMPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUserBalance(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amountStaked: BigNumber }>;

    lastRewardBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPool(overrides?: CallOverrides): Promise<[string]>;

    setRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeLP(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeLP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _LPDeposited: BigNumber;
        _rewardDebt: BigNumber;
      }
    >;
  };

  LPToken(overrides?: CallOverrides): Promise<string>;

  OHMToken(overrides?: CallOverrides): Promise<string>;

  accOHMPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUserBalance(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingRewards(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPool(overrides?: CallOverrides): Promise<string>;

  setRewardPerBlock(
    _rewardPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeLP(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeLP(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userDetails(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { _LPDeposited: BigNumber; _rewardDebt: BigNumber }
  >;

  callStatic: {
    LPToken(overrides?: CallOverrides): Promise<string>;

    OHMToken(overrides?: CallOverrides): Promise<string>;

    accOHMPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(overrides?: CallOverrides): Promise<boolean>;

    getUserBalance(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPool(overrides?: CallOverrides): Promise<string>;

    setRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stakeLP(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unstakeLP(overrides?: CallOverrides): Promise<boolean>;

    updatePool(overrides?: CallOverrides): Promise<boolean>;

    userDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _LPDeposited: BigNumber;
        _rewardDebt: BigNumber;
      }
    >;
  };

  filters: {
    "PoolUpdated(uint256,uint256,uint256)"(
      _blocksRewarded?: null,
      _amountRewarded?: null,
      _time?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        _blocksRewarded: BigNumber;
        _amountRewarded: BigNumber;
        _time: BigNumber;
      }
    >;

    PoolUpdated(
      _blocksRewarded?: null,
      _amountRewarded?: null,
      _time?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        _blocksRewarded: BigNumber;
        _amountRewarded: BigNumber;
        _time: BigNumber;
      }
    >;

    "RewardsClaimed(address,uint256,uint256)"(
      _staker?: null,
      _rewardsClaimed?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _staker: string; _rewardsClaimed: BigNumber; _time: BigNumber }
    >;

    RewardsClaimed(
      _staker?: null,
      _rewardsClaimed?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _staker: string; _rewardsClaimed: BigNumber; _time: BigNumber }
    >;

    "StakeCompleted(address,uint256,uint256,uint256)"(
      _staker?: null,
      _amount?: null,
      _totalStaked?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        _staker: string;
        _amount: BigNumber;
        _totalStaked: BigNumber;
        _time: BigNumber;
      }
    >;

    StakeCompleted(
      _staker?: null,
      _amount?: null,
      _totalStaked?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        _staker: string;
        _amount: BigNumber;
        _totalStaked: BigNumber;
        _time: BigNumber;
      }
    >;

    "TransferredOwnership(address,address,uint256)"(
      _previous?: null,
      _next?: null,
      _time?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _previous: string; _next: string; _time: BigNumber }
    >;

    TransferredOwnership(
      _previous?: null,
      _next?: null,
      _time?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _previous: string; _next: string; _time: BigNumber }
    >;

    "WithdrawCompleted(address,uint256,uint256)"(
      _staker?: null,
      _amount?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _staker: string; _amount: BigNumber; _time: BigNumber }
    >;

    WithdrawCompleted(
      _staker?: null,
      _amount?: null,
      _time?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _staker: string; _amount: BigNumber; _time: BigNumber }
    >;
  };

  estimateGas: {
    LPToken(overrides?: CallOverrides): Promise<BigNumber>;

    OHMToken(overrides?: CallOverrides): Promise<BigNumber>;

    accOHMPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUserBalance(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPool(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeLP(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeLP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userDetails(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    LPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OHMToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accOHMPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUserBalance(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastRewardBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeLP(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeLP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}