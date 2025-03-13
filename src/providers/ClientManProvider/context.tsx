"use client";
import { createContext } from "react";

// Interface defining the shape of a client object
export interface IClient {
  fullName: string;
  email: string;
  contactNumber: string;
  sex: string;
  dateOfBirth?: string;
  activeState: boolean;
  trainerId: string;
}

export interface IClientStateContext {
  readonly ClientInfo?: IClient;
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
}

export const INITIAL_STATE: IClientStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export interface IClientActionContext {
  createClient: (ClientInfo: IClient) => void;
}

export const ClientStateContext =
  createContext<IClientStateContext>(INITIAL_STATE);
export const ClientActionContext = createContext<
  IClientActionContext | undefined
>(undefined);
