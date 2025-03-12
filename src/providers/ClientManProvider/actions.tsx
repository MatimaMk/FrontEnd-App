import { createAction } from "redux-actions";
import { IClient, IClientStateContext } from "./context";

export enum ClientActionEnums {
    createClientPending = "CREATE_CLIENT_PENDING",
    createClientSuccess = "CREATE_CLIENT_SUCCESS",
    createClientError = "CREATE_CLIENT_ERROR",

  }

  export const createClientPending = createAction<IClientStateContext>(
    ClientActionEnums.createClientPending,
      () => ({ isPending: true, isSuccess: false, isError: false })
    );
    
    export const createClientSuccess = createAction<
    IClientStateContext,
    IClient
    >(ClientActionEnums.createClientSuccess, (ClientInfo: IClient ) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      ClientInfo,
    }));
    
    export const createClientError = createAction<IClientStateContext>(
        ClientActionEnums.createClientError,
      () => ({ isPending: false, isSuccess: false, isError: true })
    );
    