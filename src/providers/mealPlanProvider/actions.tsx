

// Enum defining the type of actions that can be dispatched
export enum FoodActionEnums {

    createMealPlanPending = "CREATE_MEALPLAN_PENDING",
    createMealPlanSuccess = "CREATE_MEALPLAN_SUCCESS",
    createMealPlanError = "CREATE_MEALPLAN_ERROR",

    // for Trainer meal plans
    getTrainerMealPending = "GET_TRAINERMEALP_PENDING",
    getTrainerMealSuccess = "GET_TRAINERMEALP_SUCCESS",
    getTrainerMealError = "GET_TRAINERMEALP_ERROR",
  
    //client meal plans
    getClientsMealPending = "GET_CLIENTMEALP_PENDING",
    getClientsMealSuccess=  "GET_CLIENTMEALP_SUCCESS",
    getClientsMealError = "GET_CLIENTMEALP_ERROR",

        //GET meal plan by the id
        getMealPlanByIdPending = "GET_MEALPLANBYID_PENDING",
        getMealPlanByIdSuccess=  "GET_MEALPLANBYID_SUCCESS",
        getMealPlanByIdError = "GET_MEALPLANBYID_ERROR",

  }