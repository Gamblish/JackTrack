import axios from "axios"
import { Dispatch } from "react"
import { MissionActionTypes } from "../../enums/actionTypes"
import { fetchData } from "../../hooks/fetchHook"
import { MissionAction } from "../types/mission"



export const fetchMissions = (projectId:number) => {
	return async (dispatch: Dispatch<MissionAction>) => {
		try {
			dispatch({
				type: MissionActionTypes.FETCH_MISSIONS
			})
			const response = await fetchData('tasks', { projectId: projectId })
			dispatch({
				type: MissionActionTypes.FETCH_MISSIONS_SUCCESS,
				payload: response.data.data
			})

		} catch (e) {
			dispatch({
				type: MissionActionTypes.FETCH_MISSIONS_ERROR,
				payload: 'Ошибка'

			})
		}
	}
}