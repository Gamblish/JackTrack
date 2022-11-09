import { UserActionTypes } from "../../enums/actionTypes";

export interface IUser {
	id: number;
	name: string;
	email: string;


}


export interface UserState {
	user: IUser | null
	loading: boolean
	error: string | null
}



interface FetchUsersAction {
	type: UserActionTypes.FETCH_USER


}

interface FetchUsersSuccessAction {
	type: UserActionTypes.FETCH_USER_SUCCESS
	payload: IUser



}

interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR,
	payload: any
}


export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction








