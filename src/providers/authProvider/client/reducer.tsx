"use client";
import { handleActions } from "redux-actions";
import { IClientRegStateContext, INITIAL_STATE } from "./context";
import { ClientAuthActionEnums } from "./actions";



export const AuthClientReducer = handleActions<
IClientRegStateContext,
IClientRegStateContext
>(
  {// register client
    [ClientAuthActionEnums.registerClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientAuthActionEnums.registerClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientAuthActionEnums.registerClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Login
    [ClientAuthActionEnums.loginClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientAuthActionEnums.loginClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientAuthActionEnums.loginClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
