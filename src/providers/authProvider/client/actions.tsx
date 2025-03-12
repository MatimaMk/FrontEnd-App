"use client";
import { createAction } from "redux-actions";
import {
  IClientLogins,
  IClientRegistration,
  IClientRegStateContext,
} from "./context";

//Enum defining the type of actions that can be dispatched
export enum ClientAuthActionEnums {
  registerClientPending = "CREATE_CLIENT_PENDING",
  registerClientSuccess = "CREATE_CLIENT_SUCCESS",
  registerClientError = "CREATE_CLIENT_ERROR",

  loginClientPending = "LOGIN_CLIENT_PENDING",
  loginClientSuccess = "LOGIN_CLIENT_SUCCESS",
  loginClientError = "LOGIN_CLIENT_ERROR",
}

//Regiater Client Action
export const registerClientPending =
  createAction<IClientRegStateContext>(
    ClientAuthActionEnums.registerClientPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const registerClientSuccess = createAction<
  IClientRegStateContext,
  IClientRegistration
>(
  ClientAuthActionEnums.registerClientSuccess,
  (ClientReg: IClientRegistration) => ({
    ClientReg,
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const registerClientError = createAction<IClientRegStateContext>(
  ClientAuthActionEnums.registerClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//lOGIN Client Actions
export const loginClientPending = createAction<IClientRegStateContext>(
  ClientAuthActionEnums.loginClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const loginClientSuccess = createAction<
  IClientRegStateContext,
  IClientLogins
>(ClientAuthActionEnums.loginClientSuccess, (loginDetails: IClientLogins) => ({
  loginDetails,
  isPending: false,
  isSuccess: true,
  isError: false,
}));

export const loginClientError = createAction<IClientRegStateContext>(
  ClientAuthActionEnums.loginClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
