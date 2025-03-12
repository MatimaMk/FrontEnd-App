import { handleActions } from "redux-actions";
import { ClientActionEnums } from "./actions";
import { IClientStateContext, INITIAL_STATE } from "./context"

export const ClientReducer = handleActions<IClientStateContext, IClientStateContext>({
 // create food item
 [ClientActionEnums.createClientPending]: (state, action) => ({
    ...state,
    ...action.payload,
}),

[ClientActionEnums.createClientSuccess]: (state, action) => ({
    ...state,
    ...action.payload,
}),
[ClientActionEnums.createClientError]: (state, action) => ({
    ...state,
    ...action.payload,
}),

}, INITIAL_STATE );
