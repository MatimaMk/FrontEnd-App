"use client";
import { useContext, useReducer } from "react";
import { AuthTrainerReducer } from "./reducer";
import {
  ILogins,
  INITIAL_STATE,
  ITrainerRegis,
  regisTrainActionContext,
  regisTrainStateContext,
} from "./context";
import {
  loginTError,
  loginTPending,
  loginTSuccess,
  regisTrainerError,
  regisTrainerPending,
  regisTrainerSucess,
} from "./actions";

import { getAxiosInstace } from "@/utils/axiosInstance";

export const AuthTrainerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthTrainerReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const RegisterTrainer = async (payload: ITrainerRegis) => {
    // Dispatch pending action before API call
    dispatch(regisTrainerPending());
    const endpoint ="/api/users/register";
    await instance.post(endpoint, payload) 
    .then((response)=>{
        dispatch(regisTrainerSucess(response.data));
    })

      .catch((error) => {
        console.error("Error during registration:", error);
        // Dispatch error action API call
        dispatch(regisTrainerError());
      });
  };

  const login = async (payload: ILogins) => {
    try {
      const endpoint = "/api/users/login";
      dispatch(loginTPending());
      const response = await instance.post(endpoint, payload);
     
  
      const token = response.data?.data?.token;
      if (token) {
        sessionStorage.setItem("token", token);
        console.log("Token stored successfully:", token);
      } else {
        console.error("Token is missing from the response.");
      }
  
      dispatch(loginTSuccess(response.data));
    } catch (error) {
      console.error("Login error:", error);
      dispatch(loginTError());
    }
  };
  
  
  return (
    <regisTrainStateContext.Provider value={state}>
      <regisTrainActionContext.Provider value={{ RegisterTrainer, login }}>
        {children}
      </regisTrainActionContext.Provider>
    </regisTrainStateContext.Provider>
  );
};

function useTrainerAuthState() {
  const context = useContext(regisTrainStateContext);
  if (!context) {
    throw new Error(
      "regisTrainStateContext must be used within an AuthProvider"
    );
  }
  return context;
}

function useAuthActionState() {
  const context = useContext(regisTrainActionContext);
  if (!context) {
    throw new Error(
      "regisTrainActionContext must be used within an AuthProvider"
    );
  }
  return context;
}

export { useTrainerAuthState, useAuthActionState };
