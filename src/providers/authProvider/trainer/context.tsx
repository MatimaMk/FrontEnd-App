"use client";
import { createContext } from "react";

// Interface defining the shape of a Trainer object
export interface ITrainerRegis {
  username: string;
  email: string;
  password: string;
}

export interface ITrainerUseContext {
  readonly registerDetails?: ITrainerRegis;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const INITIAL_STATE: ITrainerUseContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export interface ITrainerActionContext {
  RegisterTrainer?: (playload: ITrainerRegis) => void;
}

const regisTrainStateContext = createContext<ITrainerUseContext>(INITIAL_STATE);
const regisTrainActionContext = createContext<ITrainerActionContext>({});

export { regisTrainStateContext, regisTrainActionContext };
