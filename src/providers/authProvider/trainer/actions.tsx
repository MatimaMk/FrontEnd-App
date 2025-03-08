import { createAction } from "redux-actions";
import { ITrainerRegis, ITrainerUseContext } from "./context";

//Enum defining the type of actions that can be dispatched
export enum TrainerActionEnums {
  registerTrainerPending = "CREATE_TRAINER_PENDING",
  registerTrainerSuccess = "CREATE_TRAINER_SUCCESS",
  registerTrainerError = "CREATE_TRAINER_ERROR",
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
