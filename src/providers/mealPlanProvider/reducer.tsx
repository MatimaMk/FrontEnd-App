import { handleActions } from "redux-actions";
import { IMealPlanStateContext, INITIAL_STATE } from "./context";
import { MealPlanActionEnums } from "./actions";


export const MealPalnReducer = handleActions<
IMealPlanStateContext,
IMealPlanStateContext
>(
  {
    // creatw meal plan
    [MealPlanActionEnums.createMealPlanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealPlanActionEnums.createMealPlanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealPlanActionEnums.createMealPlanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // get Trainer Meal plans
    [MealPlanActionEnums.getTrainerMealPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealPlanActionEnums.getTrainerMealSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealPlanActionEnums.getTrainerMealError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

     // get Client Meal plans
     [MealPlanActionEnums.getClientsMealPending]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
      [MealPlanActionEnums.getClientsMealSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
      [MealPlanActionEnums.getClientsMealError]: (state, action) => ({
        ...state,
        ...action.payload,
      }),


        // get Meal planby id
     [MealPlanActionEnums.getMealPlanByIdPending]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
      [MealPlanActionEnums.getMealPlanByIdSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
      [MealPlanActionEnums.getMealPlanByIdError]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
  },
  INITIAL_STATE
);
