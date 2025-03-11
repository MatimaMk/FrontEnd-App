import { handleActions } from 'redux-actions';
import { ICurrentUserStateContext, INITIAL_STATE } from './context';
import { CurrentUserActionEnums } from './actions';

export const CurrentUserReducer = handleActions<ICurrentUserStateContext, ICurrentUserStateContext>({
  [CurrentUserActionEnums.getCurrentUserPending]:
   (state, action) => ({ ...state, ...action.payload }),
  [CurrentUserActionEnums.getCurrentUserSuccess]: (state, action) => 
    ({ ...state, ...action.payload }),
  [CurrentUserActionEnums.getCurrentUserError]: (state, action) =>
    
({ ...state, ...action.payload }),
}, INITIAL_STATE);