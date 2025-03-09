import { createAction } from "redux-actions";
import { IFood, IFoodStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum FoodActionEnums {
    
    getFoodItemsPending = "GET_FOODITEMS_PENDING",
    getFoodItemsSuccess = "GET_FOODITEMS_SUCCESS",
    getFoodItemsError = "GET_FOODITEMS_ERROR",
  
    getFoodItemPending = "GET_FOODITEM_PENDING",
    getFoodItemSuccess=  "GET_FOODITEM_SUCCESS",
    getFoodItemError = "GET_FOODITEM_ERROR",
  
    createFoodItemPending = "CREATE_FOODITEM_PENDING",
    createFoodItemSuccess = "CREATE_FOODITEM_SUCCESS",
    createFoodItemError = "CREATE_FOODITEM_ERROR",


  }
  
  // Get All food items Actions
export const getFoodItemsPending = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodItemsPending,() => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getFoodItemsSuccess = createAction<IFoodStateContext,  IFood[] >(FoodActionEnums.getFoodItemsSuccess,
    (foodItems: IFood[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      foodItems, 
    })
  );
  
  export const getFoodItemsError = createAction<IFoodStateContext>( FoodActionEnums.getFoodItemsError,() => 
    ({ isPending: false, isSuccess: false, isError: true })
  );
  

  // Get food item by the category Actions
export const getFoodItemPending = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodItemsPending,() => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getFoodItemSuccess = createAction<IFoodStateContext,  IFood >(FoodActionEnums.getFoodItemsSuccess,
    (foodaItem: IFood) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      foodaItem, 
    })
  );
  
  export const getFoodItemError = createAction<IFoodStateContext>( FoodActionEnums.getFoodItemError,() => 
    ({ isPending: false, isSuccess: false, isError: true })
  );

  
export const createFoodItemPending = createAction<IFoodStateContext>(
    FoodActionEnums.createFoodItemPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const createFoodItemSuccess = createAction<
  IFoodStateContext,
  IFood
  >(FoodActionEnums.createFoodItemSuccess, (foodItem: IFood) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    foodItem,
  }));
  
  export const createFoodItemError = createAction<IFoodStateContext>(
    FoodActionEnums.createFoodItemError,
    () => ({ isPending: false, isSuccess: false, isError: true })
  );
  
  
