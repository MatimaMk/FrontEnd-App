import { useContext, useReducer } from "react";
import { ClientReducer } from "./reducer";
import {  ClientActionContext, ClientStateContext, IClient, INITIAL_STATE } from "./context";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { createClientError, createClientPending, createClientSuccess } from "./actions";


export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const createClient = async (payload: IClient) => {
    dispatch(createClientPending());
      const endpoint = '/api/client';
      await instance.post(endpoint, payload) 
      .then((response)=>{
        dispatch( createClientSuccess(response.data));
         })
 .catch ((error) => {
      console.error('Error creating food item:', error);
      dispatch(createClientError());
    });
  };

return(

    <ClientStateContext.Provider value={state}>
    <ClientActionContext.Provider value={{ createClient }}>
      {children}
    </ClientActionContext.Provider>
  </ClientStateContext.Provider>

)

};

function ClientState() {
    const context = useContext(ClientStateContext);
    if (!context) {
      throw new Error(
        "regisTrainStateContext must be used within an AuthProvider"
      );
    }
    return context;
  }
  
  function ClinetActionState() {
    const context = useContext(ClientStateContext);
    if (!context) {
      throw new Error(
        "regisTrainActionContext must be used within an AuthProvider"
      );
    }
    return context;
  }
  
  export { ClientState, ClinetActionState };