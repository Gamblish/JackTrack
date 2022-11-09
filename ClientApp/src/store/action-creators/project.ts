import { Dispatch } from "react"
import { ProjectActionTypes } from "../../enums/actionTypes"
import { fetchData } from "../../hooks/fetchHook"
import { ProjectAction } from "../types/project"

export const fetchProject = () => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECT
			})
			const response = await fetchData('projects' , null)
            
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECT_SUCCESS,
				payload: response.data.data
			})

		} catch (e) {
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECT_ERROR,
				payload: 'Ошибка'

			})
		}
	}
}