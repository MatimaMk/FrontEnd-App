"use client"
import { createContext } from 'react';


export interface IUser {
  data? :{
  id?: string,
  name?: string,
  email?: string,
  role?: string,
  contactNumber?: string,
  planType?: string,
  activeState?:true,
  trial?: false,
  policiesAccepted?:boolean,
  date: string,
}

}
export interface ICurrentUserStateContext {
  readonly currentUser?: IUser;
  readonly iscurrPending: boolean;
  readonly iscurrSuccess: boolean;
  readonly iscurrError: boolean;
};

export interface ICurrentUserActionContext {
    getCurrentUser: () => void;

};

export const INITIAL_STATE: ICurrentUserStateContext = {
    iscurrPending: false,
    iscurrSuccess: false,
    iscurrError: false,
};

export const CurrentUserStateContext = createContext<ICurrentUserStateContext>(INITIAL_STATE);
export const CurrentUserActionContext = createContext<ICurrentUserActionContext | undefined>(undefined);