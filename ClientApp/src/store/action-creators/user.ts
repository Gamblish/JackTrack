import axios from "axios"
import { Dispatch } from "react"
import { MissionActionTypes, UserActionTypes } from "../../enums/actionTypes"
import { fetchData } from "../../hooks/fetchHook"
import { MissionAction } from "../types/mission"
import { UserAction, UserState } from "../types/user"



export const setUser = (payload: object|null) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({
				type: UserActionTypes.FETCH_USER
			})

			const response = await fetchData('user/login', payload)
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

				payload: e

			})
		}
	}
}

