"use client";

import { useContext, useReducer } from "react";
import { FoodActionContext, FoodStateContext, IFood, INITIAL_STATE } from "./context";
import { FoodItemReducer } from "./reducer";
import { createFoodItemPending, getFoodItemPending, getFoodItemsError, getFoodItemsPending, getFoodItemsSuccess } from "./actions";
import axios from "axios";

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(FoodItemReducer, INITIAL_STATE);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2FhMWM3ZjQ4MzY0MDAxOTVkYTE2OCIsIm5hbWUiOiJ0ZXN0IHRyYWluZXIgMiIsInJvbGUiOiJhZG1pbiIsImZlYXR1cmVzIjpbXSwiaWF0IjoxNzQxMzM3NjAxLCJleHAiOjE3NDE5NDI0MDF9.JFQUc66Czls-WRAirbQ1usByTFWyoh9sJtIWt6IOByU';

  const getHeaders = () => ({
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Get food items
  const getFoodItems = async () => {
    dispatch(getFoodItemsPending());
    try {
      const endpoint = 'https://body-vault-server-b9ede5286d4c.herokuapp.com/api/food/';
      const response = await axios.get(endpoint, getHeaders());
      dispatch(getFoodItemsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching food items:', error);
      dispatch(getFoodItemsError());
    }
  };

  // Get food items by category
  const getFoodItem = async (category: string) => {
    dispatch(getFoodItemPending());
    try {
      const endpoint = `https://body-vault-server-b9ede5286d4c.herokuapp.com/api/food/category/${category}`;
      const response = await axios.get(endpoint, getHeaders());
      dispatch(getFoodItemsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching food items by category:', error);
      dispatch(getFoodItemsError());
    }
  };

  // Create a food item
  const createFoodItem = async (foodItem: IFood) => {
    dispatch(createFoodItemPending());
    try {
      const endpoint = 'https://body-vault-server-b9ede5286d4c.herokuapp.com/api/food/';
      const response = await axios.post(endpoint, foodItem, getHeaders());
      dispatch(getFoodItemsSuccess([response.data]));
    } catch (error) {
      console.error('Error creating food item:', error);
      dispatch(getFoodItemsError());
    }
  };

  return (
    <FoodStateContext.Provider value={state}>
      <FoodActionContext.Provider value={{ getFoodItems, getFoodItem, createFoodItem }}>
        {children}
      </FoodActionContext.Provider>
    </FoodStateContext.Provider>
  );
};

export const useFoodItemState = () => {
  const context = useContext(FoodStateContext);
  if (!context) {
    throw new Error('useFoodItemState must be used within a FoodProvider');
  }
  return context;
};

export const useFoodItemsActions = () => {
  const context = useContext(FoodActionContext);
  if (!context) {
    throw new Error('useFoodItemsActions must be used within a FoodProvider');
  }
  return context;
};