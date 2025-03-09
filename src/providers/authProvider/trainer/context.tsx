"use client";
import { createContext } from "react";

// Interface defining the shape of a Trainer object
export interface ITrainerRegis {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: string,
  playType: string,
  activeState:true,
  trial: false,
  policiesAccepted:boolean,
}
export interface ILogins {
  email: string;
  password: string;
}
export interface ITrainerUseContext {
  readonly registerDetails?: ITrainerRegis;
  readonly loginDetails?: ILogins;
  readonly TrainerLogOut?: ILogins;
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
  login?: (playload: ILogins) => void;
  logout?: () => void;
}
const regisTrainStateContext = createContext<ITrainerUseContext>(INITIAL_STATE);
const regisTrainActionContext = createContext<ITrainerActionContext>({});

export { regisTrainStateContext, regisTrainActionContext };
