import { handleActions } from "redux-actions";
import { IClientStateContext, INITIAL_STATE } from "./context";
import { ClientActionEnums } from "./actions";



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
