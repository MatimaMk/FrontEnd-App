"use client";
import { createContext } from "react";

// Interface defining the shape of a foodItem object
export interface IFood {
  id?: string;
  name: string;
  category: string;
  servingsize: number;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  fiber: number;
  sodium: number;
  potassium: number;
  cholesterol: number;
  energy: number;
}

export interface IFoodStateContext {
  //readonly foodItem?: IFood;
  readonly foodItems?: IFood[];
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
}

export const INITIAL_STATE: IFoodStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// These actions will be implemented in the provider component
export interface IFoodActionContext {
  getFoodItems: () => void; // Fetch all food items
  getFoodItem: (category: string) => void; // Fetch a single food Item by the categoty
  createFoodItem: (foodItem: IFood) => void;
}

export const FoodStateContext = createContext<IFoodStateContext>(INITIAL_STATE);
export const FoodActionContext = createContext<IFoodActionContext | undefined>(
  undefined
);
