"use client"
import { createContext } from "react";

// Interface defining the shape of a foodItem object
export interface IClient {
       fullName: string,
        email:string,
        contactNumber: string,
        sex:number,
        DateOfBirth: number,
        activeState: number,
        trainerId: string,

}


export interface IClientStateContext {
   readonly ClientInfo?: IClient;   
   readonly isPending: boolean;  
   readonly isSuccess: boolean; 
   readonly isError: boolean;     
  };

  export const INITIAL_STATE: IClientStateContext = {
      isPending: false,  
      isSuccess: false,  
      isError: false, 
    };

    export interface IClientActionContext {
  
        createClient: (payload: IClient) => void;  
    
      };
    
    export const ClientStateContext =createContext<IClientStateContext>(INITIAL_STATE);
    export const ClientActionContext = createContext<IClientActionContext | undefined>(undefined);
