"use client";
import { useContext, useReducer } from "react";
import { CurrentUserReducer } from "./reducer";
import {
  CurrentUserActionContext,
  CurrentUserStateContext,
  INITIAL_STATE,
} from "./context";
import { getAxiosInstace } from "@/utils/axiosInstance";
import {
  getCurrentUserError,
  getCurrentUserPending,
  getCurrentUserSuccess,
} from "./actions";

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CurrentUserReducer, INITIAL_STATE);
  const instance = getAxiosInstace();


  const getCurrentUser = async () => {
    const endpoint = "/api/user/current";
    const token = sessionStorage.getItem("token");
    dispatch(getCurrentUserPending());

    if (!token) return dispatch(getCurrentUserError());

    instance.defaults.headers.common.Authorization = token;

    try {
      const response = await instance.get(endpoint);
      dispatch(getCurrentUserSuccess(response.data));
   
    } catch (error) {
      console.error("Error getting current user:", error);
      dispatch(getCurrentUserError());
    }
  };

  return (
    <CurrentUserStateContext.Provider value={state}>
      <CurrentUserActionContext.Provider value={{ getCurrentUser }}>
        {children}
      </CurrentUserActionContext.Provider>
    </CurrentUserStateContext.Provider>
  );
};

function CurrentUserState() {
  const context = useContext(CurrentUserStateContext);
  if (!context) {
    throw new Error(
      "CurrentUserStateContext must be used within a CurrentUserProvider"
    );
  }
  return context;
}

function CurrentUserAction() {
  const context = useContext(CurrentUserActionContext);
  if (!context) {
    throw new Error(
      "CurrentUserActionContext must be used within a CurrentUserProvider"
    );
  }
  return context;
}
const USECurrentuser=()=>{
  return {
    ...CurrentUserState(),
    ...CurrentUserAction()
  }
}

export { USECurrentuser };
