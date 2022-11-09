import axios from "axios"
import { Dispatch } from "react"
import { AuthorizedActionTypes, MissionActionTypes, UserActionTypes } from "../../enums/actionTypes"
import { fetchData } from "../../hooks/fetchHook"
import { AuthAction } from "../types/auth"
import { MissionAction } from "../types/mission"
import { UserAction } from "../types/user"



export const fetchAuth = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({
				type: UserActionTypes.FETCH_USER
			})
			const response = await fetchData('user/authorized', null)


			dispatch({
				type: UserActionTypes.FETCH_USER_SUCCESS,
				payload: response.data.data
			})
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: null
			})



		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: null

			})
		}
	}
}