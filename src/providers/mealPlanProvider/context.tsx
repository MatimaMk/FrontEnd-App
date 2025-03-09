'use client'
import { createContext } from "react";

export interface IMealPlan {
      
    name:string,
    client: string, //must receive the ID
    Trainer:string, // must receive trainer Id
    clientName: string,
    description: string,
    notes:string,
    clientNotes: [], // must be an array
    meals:[],
    mealTotals: {},
    base: boolean,
};

export interface IMealPlanStateContext {
   readonly mealPlan?: IMealPlan;  
   readonly mealPlans?: IMealPlan[]; 
   readonly isPending: boolean;  
   readonly isSuccess: boolean; 
   readonly isError: boolean;     
  };

  export const INITIAL_STATE: IMealPlanStateContext = {
      isPending: false,  
      isSuccess: false,  
      isError: false, 
    };
    
export interface IMealPlanActionContext {
    createMealPlan: (mealPlan: IMealPlan) => void;  
    getTrainerMealPlans: (trainer:string) => void;     
    getClientsMealPlan: (client: string) => void;
    getMealPlanById:(id: number)=> void;

  };

  
    export const FoodStateContext =createContext<IMealPlanStateContext>(INITIAL_STATE);
   export const FoodActionContext = createContext<IMealPlanActionContext | undefined>(undefined);
  
