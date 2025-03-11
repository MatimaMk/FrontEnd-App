import { createAction } from 'redux-actions';
import { ICurrentUserStateContext } from './context';

export enum CurrentUserActionEnums {
  getCurrentUserPending = 'GET_CURRENT_USER_PENDING',
  getCurrentUserSuccess = 'GET_CURRENT_USER_SUCCESS',
  getCurrentUserError = 'GET_CURRENT_USER_ERROR',
}

export const getCurrentUserPending = createAction<ICurrentUserStateContext>(CurrentUserActionEnums.getCurrentUserPending, () => ({
    iscurrPending: true,
  iscurrSuccess: false,
  iscurrError: false,
}));

export const getCurrentUserSuccess = createAction<ICurrentUserStateContext, any>(CurrentUserActionEnums.getCurrentUserSuccess, (currentUser: any) => ({
    iscurrPending: true,
    iscurrSuccess: false,
    iscurrError: false
}));

export const getCurrentUserError = createAction<ICurrentUserStateContext>(CurrentUserActionEnums.getCurrentUserError, () => ({
    iscurrPending: true,
    iscurrSuccess: false,
    iscurrError: false
}));
