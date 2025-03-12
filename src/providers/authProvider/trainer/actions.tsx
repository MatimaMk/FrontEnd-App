import { createAction } from "redux-actions";
import { ILogins, ITrainerRegis, ITrainerUseContext } from "./context";

//Enum defining the type of actions that can be dispatched
export enum TrainerActionEnums {
  registerTrainerPending = "CREATE_TRAINER_PENDING",
  registerTrainerSuccess = "CREATE_TRAINER_SUCCESS",
  registerTrainerError = "CREATE_TRAINER_ERROR",

  loginTrainerPending = "LOGIN_TRAINER_PENDING",
  loginTrainerSuccess = "LOGIN_TRAINER_SUCCESS",
  loginTrainerError = "LOGIN_TRAINER_ERROR",
  logOutTrainer = "LOGOUT_TRAINER"
 

}

//Regiater Trainer Action
export const regisTrainerPending = createAction<ITrainerUseContext>(
  TrainerActionEnums.registerTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const regisTrainerSucess = createAction<
  ITrainerUseContext,
  ITrainerRegis
>(
  TrainerActionEnums.registerTrainerSuccess,
  (registerDetails: ITrainerRegis) => ({
    registerDetails,
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const regisTrainerError = createAction<ITrainerUseContext>(
  TrainerActionEnums.registerTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);


//lOGIN Tainer Actions
export const loginTPending = createAction<ITrainerUseContext>(
  TrainerActionEnums.loginTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const  loginTSuccess = createAction<ITrainerUseContext,ILogins
>(
  TrainerActionEnums.loginTrainerSuccess,
  (loginDetails: ILogins) => ({
    loginDetails,
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const  loginTError = createAction<ITrainerUseContext>(
  TrainerActionEnums.loginTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const logOutAction = createAction<ITrainerUseContext>(TrainerActionEnums.logOutTrainer,(
) => ({isPending: false, isSuccess: false, isError: true })
);