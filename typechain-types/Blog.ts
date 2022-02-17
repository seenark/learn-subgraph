/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Blog {
  export type PostStruct = {
    id: BigNumberish;
    title: string;
    content: string;
    published: boolean;
  };

  export type PostStructOutput = [BigNumber, string, string, boolean] & {
    id: BigNumber;
    title: string;
    content: string;
    published: boolean;
  };
}

export interface BlogInterface extends utils.Interface {
  contractName: "Blog";
  functions: {
    "createPost(string,string)": FunctionFragment;
    "fetchAllPost()": FunctionFragment;
    "fetchPost(string)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBlogName(string)": FunctionFragment;
    "updatePost(uint256,string,string,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createPost",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchAllPost",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fetchPost", values: [string]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBlogName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePost",
    values: [BigNumberish, string, string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "createPost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchAllPost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fetchPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBlogName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePost", data: BytesLike): Result;

  events: {
    "PostCreated(uint256,string,string)": EventFragment;
    "PostUpdated(uint256,string,string,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PostCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PostUpdated"): EventFragment;
}

export type PostCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  { id: BigNumber; title: string; hash: string }
>;

export type PostCreatedEventFilter = TypedEventFilter<PostCreatedEvent>;

export type PostUpdatedEvent = TypedEvent<
  [BigNumber, string, string, boolean],
  { id: BigNumber; title: string; hash: string; published: boolean }
>;

export type PostUpdatedEventFilter = TypedEventFilter<PostUpdatedEvent>;

export interface Blog extends BaseContract {
  contractName: "Blog";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlogInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPost(
      title: string,
      hash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fetchAllPost(overrides?: CallOverrides): Promise<[Blog.PostStructOutput[]]>;

    fetchPost(
      hash: string,
      overrides?: CallOverrides
    ): Promise<[Blog.PostStructOutput]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBlogName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePost(
      postId: BigNumberish,
      title: string,
      hash: string,
      published: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createPost(
    title: string,
    hash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fetchAllPost(overrides?: CallOverrides): Promise<Blog.PostStructOutput[]>;

  fetchPost(
    hash: string,
    overrides?: CallOverrides
  ): Promise<Blog.PostStructOutput>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBlogName(
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePost(
    postId: BigNumberish,
    title: string,
    hash: string,
    published: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createPost(
      title: string,
      hash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fetchAllPost(overrides?: CallOverrides): Promise<Blog.PostStructOutput[]>;

    fetchPost(
      hash: string,
      overrides?: CallOverrides
    ): Promise<Blog.PostStructOutput>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBlogName(_name: string, overrides?: CallOverrides): Promise<void>;

    updatePost(
      postId: BigNumberish,
      title: string,
      hash: string,
      published: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PostCreated(uint256,string,string)"(
      id?: null,
      title?: null,
      hash?: null
    ): PostCreatedEventFilter;
    PostCreated(id?: null, title?: null, hash?: null): PostCreatedEventFilter;

    "PostUpdated(uint256,string,string,bool)"(
      id?: null,
      title?: null,
      hash?: null,
      published?: null
    ): PostUpdatedEventFilter;
    PostUpdated(
      id?: null,
      title?: null,
      hash?: null,
      published?: null
    ): PostUpdatedEventFilter;
  };

  estimateGas: {
    createPost(
      title: string,
      hash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fetchAllPost(overrides?: CallOverrides): Promise<BigNumber>;

    fetchPost(hash: string, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBlogName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePost(
      postId: BigNumberish,
      title: string,
      hash: string,
      published: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPost(
      title: string,
      hash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fetchAllPost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchPost(
      hash: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBlogName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePost(
      postId: BigNumberish,
      title: string,
      hash: string,
      published: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
