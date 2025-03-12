"use client";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { useContext, useReducer } from "react";
import { AuthClientReducer } from "./reducer";
import {  ClientActionAuthContext, ClientStateContext, IClientLogins, IClientRegistration, INITIAL_STATE } from "./context";
import { loginClientError, loginClientPending, loginClientSuccess, registerClientError, registerClientPending } from "./actions";
import { regisTrainerSucess } from "../trainer/actions";

export const ClientAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const ClientReg = async (payload: IClientRegistration) => {
    // Dispatch pending action before API cClientRegall
    dispatch(registerClientPending());
    const endpoint ="/api/users/register/mobile";
    await instance.post(endpoint, payload) 
    .then((response)=>{
        dispatch(regisTrainerSucess(response.data));
    })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Dispatch error action API call
        dispatch(registerClientError());
      });
  };

  const clientLogin = async (payload: IClientLogins) => {
    // Dispatch pending action before API call
    dispatch(loginClientPending());
    const endpoint = "/api/users/login";
    await instance.post(endpoint, payload)
      .then((response) => {
        dispatch(loginClientSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error during login:", error);
        dispatch(loginClientError());
      });
};

  
  
  return (
    <ClientStateContext.Provider value={state}>
      <ClientActionAuthContext.Provider value={{ClientReg , clientLogin }}>
               {children}
      </ClientActionAuthContext.Provider>
    </ClientStateContext.Provider>
  );
};

function useClientAuthState() {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw new Error(
      "regisTrainStateContext must be used within an AuthProvider"
    );
  }
  return context;
}

function ClientResActions() {
  const context = useContext(ClientActionAuthContext);
  if (!context) {
    throw new Error(
      "regisTrainActionContext  its me be used within an AuthProvider"
    );
  }
  return context;
}

export { useClientAuthState, ClientResActions };
