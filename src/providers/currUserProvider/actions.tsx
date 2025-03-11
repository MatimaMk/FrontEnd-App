import { createAction } from "redux-actions";
import { ICurrentUserStateContext, IUser } from "./context";

export enum CurrentUserActionEnums {
  getCurrentUserPending = "GET_CURRENT_USER_PENDING",
  getCurrentUserSuccess = "GET_CURRENT_USER_SUCCESS",
  getCurrentUserError = "GET_CURRENT_USER_ERROR",
}

export const getCurrentUserPending = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnums.getCurrentUserPending,
  () => ({
    iscurrPending: true,
    iscurrSuccess: false,
    iscurrError: false,
  })
);

export const getCurrentUserSuccess = createAction<
  ICurrentUserStateContext,
  IUser
>(CurrentUserActionEnums.getCurrentUserSuccess, (currentUser: IUser) => ({
  iscurrPending: true,
  iscurrSuccess: false,
  iscurrError: false,
  currentUser,
}));

export const getCurrentUserError = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnums.getCurrentUserError,
  () => ({
    iscurrPending: true,
    iscurrSuccess: false,
    iscurrError: false,
  })
);
