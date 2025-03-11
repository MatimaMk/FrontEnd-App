"use client"
import { createContext } from 'react';

export interface ICurrentUserStateContext {
  readonly currentUser?: any;
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