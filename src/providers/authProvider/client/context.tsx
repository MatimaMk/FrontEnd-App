"use client";
import { createContext } from "react";
export interface IClientRegistration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth?: string;
  contactNumber: string;
  PoliciesAccepted: boolean;
}

export interface IClientLogins {
  email: string;
  password: string;
}

export interface IClientRegStateContext {
  readonly ClientReg?: IClientRegistration;
  readonly clientLogin?: IClientLogins;
  readonly isPending?: boolean;
  readonly isSuccess?: boolean;
  readonly isError?: boolean;
}

export const INITIAL_STATE: IClientRegStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export interface IClientRegActionContext {
  ClientReg: (payload: IClientRegistration) => void;
  clientLogin: (payload: IClientLogins) => void;
}

export const ClientStateContext =
  createContext<IClientRegStateContext>(INITIAL_STATE);
export const ClientActionAuthContext = createContext< IClientRegActionContext | undefined>(undefined);
