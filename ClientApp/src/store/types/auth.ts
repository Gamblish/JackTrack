import { AuthorizedActionTypes } from "../../enums/actionTypes";
import { IUser } from "./user";

interface FetchAuthAction {
	type: AuthorizedActionTypes.FETCH_AUTH
}

interface FetchAuthSuccessAction {
	type: AuthorizedActionTypes.FETCH_AUTH_SUCCESS
	payload: IUser
}

interface FetchAuthErrorAction {
	type: AuthorizedActionTypes.FETCH_AUTH_ERROR
	payload: any
}


export type AuthAction = FetchAuthAction | FetchAuthSuccessAction | FetchAuthErrorAction
