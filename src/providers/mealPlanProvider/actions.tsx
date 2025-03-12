import { createAction } from "redux-actions";
import { IMealPlan, IMealPlanStateContext } from "./context";


// Enum defining the type of actions that can be dispatched
export enum MealPlanActionEnums {
    //create meal
    createMealPlanPending = "CREATE_MEALPLAN_PENDING",
    createMealPlanSuccess = "CREATE_MEALPLAN_SUCCESS",
    createMealPlanError = "CREATE_MEALPLAN_ERROR",

    // for Trainer meal plans
    getTrainerMealPending = "GET_TRAINERMEALP_PENDING",
    getTrainerMealSuccess = "GET_TRAINERMEALP_SUCCESS",
    getTrainerMealError = "GET_TRAINERMEALP_ERROR",
  
    //client meal plans
    getClientsMealPending = "GET_CLIEgetTrainerMealSuccessNTMEALP_PENDING",
    getClientsMealSuccess=  "GET_CLIENTMEALP_SUCCESS",
    getClientsMealError = "GET_CLIENTMEALP_ERROR",

        //GET meal plan by the id
        getMealPlanByIdPending = "GET_MEALPLANBYID_PENDING",
        getMealPlanByIdSuccess=  "GET_MEALPLANBYID_SUCCESS",
        getMealPlanByIdError = "GET_MEALPLANBYID_ERROR",

  }

  //create meal
export const createMealPlanPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.createMealPlanPending  ,() => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const  createMealPlanSuccess = createAction<IMealPlanStateContext,  IMealPlan[] >(MealPlanActionEnums.createMealPlanSuccess,
    (mealPlan: IMealPlan[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      mealPlan, 
    })
  );
  
  export const createMealPlanError = createAction<IMealPlanStateContext>( MealPlanActionEnums.createMealPlanError,() => 
    ({ isPending: false, isSuccess: false, isError: true })
  );
  

  //get trainer meal plans
  export const getTrainerMealPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getTrainerMealPending  ,() => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getTrainerMealSuccess = createAction<IMealPlanStateContext,  IMealPlan[] >(MealPlanActionEnums.getTrainerMealSuccess,
    (mealPlan: IMealPlan[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      mealPlan, 
    })
  );
  
  export const getTrainerMealError = createAction<IMealPlanStateContext>( MealPlanActionEnums.getTrainerMealError,() => 
    ({ isPending: false, isSuccess: false, isError: true })
  );

  //get client meal plans
  export const getClientsMealPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getClientsMealPending
     ,() => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getClientsMealSuccess = createAction<IMealPlanStateContext,  IMealPlan[] >(MealPlanActionEnums.getClientsMealSuccess,
    (mealPlan: IMealPlan[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      mealPlan, 
    })
  );
  
  export const getClientsMealError = createAction<IMealPlanStateContext>( MealPlanActionEnums.getClientsMealError,() => 
    ({ isPending: false, isSuccess: false, isError: true })
  );

    //get meal plans by the id
    export const getMealPlanByIdPending = createAction<IMealPlanStateContext>(
        MealPlanActionEnums.getMealPlanByIdPending
         ,() => ({ isPending: true, isSuccess: false, isError: false })
      );
      
      export const getMealPlanByIdSuccess = createAction<IMealPlanStateContext,  IMealPlan[] >(MealPlanActionEnums.getMealPlanByIdSuccess,
        (mealPlan: IMealPlan[]) => ({
          isPending: false,
          isSuccess: true,
          isError: false,
          mealPlan, 
        })
      );
      
      export const getMealPlanByIdError = createAction<IMealPlanStateContext>( MealPlanActionEnums.getMealPlanByIdError,() => 
        ({ isPending: false, isSuccess: false, isError: true })
      );
    