import { handleActions } from "redux-actions";
import { IFoodStateContext, INITIAL_STATE } from "./context";
import { FoodActionEnums } from "./actions";


export const FoodItemReducer = handleActions<IFoodStateContext, IFoodStateContext>({
    //get all food items
    [FoodActionEnums.getFoodItemsPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodItemsSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [FoodActionEnums.getFoodItemsError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    //get all food item by category
    [FoodActionEnums.getFoodItemPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodItemSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [FoodActionEnums.getFoodItemError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

 // create food item

 [FoodActionEnums.createFoodItemPending]: (state, action) => ({
    ...state,
    ...action.payload,
}),

[FoodActionEnums.createFoodItemSuccess]: (state, action) => ({
    ...state,
    ...action.payload,
}),
[FoodActionEnums.createFoodItemError]: (state, action) => ({
    ...state,
    ...action.payload,
}),

}, INITIAL_STATE );
