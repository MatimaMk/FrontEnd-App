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
import axios from "axios";

export const AuthTrainerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthTrainerReducer, INITIAL_STATE);

  const RegisterTrainer = async (payload: ITrainerRegis) => {
    // Dispatch pending action before API call
    dispatch(regisTrainerPending());
    const endpoint =
      "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/register";
    await axios
      .post(endpoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const message = `Trainer registered successfully, trainer ID: ${response.data.ID}`;
        console.log(message);
        dispatch(regisTrainerSucess(response.data));
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Dispatch error action API call
        dispatch(regisTrainerError());
      });
  };

  const login = async (payload: ILogins) => {
    // Dispatch pending action before API call
    dispatch(loginTPending());
  
    const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/login";
  
    await axios
      .post(endpoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const message = `User logged in successfully, user ID: ${response.data.ID}`;
        console.log(message);
        dispatch(loginTSuccess(response.data)  );
      })
      .catch((error) => {
        console.error("Error during login:", error);
        // Dispatch error action API call
        dispatch(loginTError());
      });
  };
  
  
  return (
    <regisTrainStateContext.Provider value={state}>
      <regisTrainActionContext.Provider value={{ RegisterTrainer }}>
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
