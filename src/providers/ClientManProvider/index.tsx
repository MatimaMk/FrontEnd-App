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

export const ClientManProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  // Function to create a new client
  const createClient = async (payload: IClient) => {
    dispatch(createClientPending());
    const endpoint = "/api/client";
    try {
      const response = await instance.post(endpoint, payload);
      dispatch(createClientSuccess(response.data));
    } catch (error) {
      console.error("Error creating client:", error);
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

function ClientState() {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw new Error(
      "ClientStateContext must be used within a ClientProvider"
    );
  }
  return context;
}

function ClientActionState() {
  const context = useContext(ClientActionContext); // Fixed the incorrect reference
  if (!context) {
    throw new Error(
      "ClientActionContext must be used within a ClientProvider"
    );
  }
  return context;
}

export { ClientState, ClientActionState };
