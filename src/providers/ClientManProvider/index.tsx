"use client";
import React, { useContext, useReducer } from "react";
import { ClientReducer } from "./reducer";
import { getAxiosInstace } from "@/utils/axiosInstance";
import {
  createClientError,
  createClientPending,
  createClientSuccess,
} from "./actions";
import {
  ClientActionContext,
  ClientStateContext,
  IClient,
  INITIAL_STATE,
} from "./context";

export const ClientManProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const createClient = async (clientInfo: IClient) => {
    const endpoint = "/api/client";
    const token = sessionStorage.getItem("token");
  
    // Dispatch pending state
    dispatch(createClientPending());
  
    // Validate token presence
    if (!token) {
      dispatch(createClientError());
      return;
    }
  
    try {
      // Make the API request with the token in the headers
      const response = await instance.post(endpoint, clientInfo, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to the request
        },
      });
  
      // Dispatch success and handle data
      dispatch(createClientSuccess(response.data.data));
  
    } catch (error: unknown) {
      if (error instanceof Error ) {
        // Handle server response errors
      }
      dispatch(createClientError());
    }
  };
  
  return (
    <ClientStateContext.Provider value={state}>
      <ClientActionContext.Provider value={{ createClient }}>
        {children}
      </ClientActionContext.Provider>
    </ClientStateContext.Provider>
  );
};

export function useClientState() {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw new Error("ClientStateContext must be used within ClientManProvider");
  }
  return context;
}

export function useClientActions() {
  const context = useContext(ClientActionContext);
  if (!context) {
    throw new Error("ClientActionContext must be used within ClientManProvider");
  }
  return context;
}

export const useCreateByTrainer  = () => {
  return {
    ...useClientState(),
    ...useClientActions(),
  };
};