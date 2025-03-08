import { handleActions } from "redux-actions";
import { INITIAL_STATE, ITrainerUseContext } from "./context";
import { TrainerActionEnums } from "./actions";

export const AuthTrainerReducer = handleActions<
  ITrainerUseContext,
  ITrainerUseContext
>(
  {
    [TrainerActionEnums.registerTrainerPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerActionEnums.registerTrainerSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerActionEnums.registerTrainerError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
