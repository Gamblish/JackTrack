
import { ProjectActionTypes } from "../../enums/actionTypes"
import { ProjectAction, projectState } from "../types/project"




const initialState: projectState = {
	projects:[],
	loading: false,
	error: null


}


export const projectReducer = (state = initialState, action: ProjectAction) => {
	switch (action.type) {
		case ProjectActionTypes.FETCH_PROJECT:
			return { ...state, loading: true }

		case ProjectActionTypes.FETCH_PROJECT_SUCCESS:

			return { ...state, loading: false, projects: action.payload }

		case ProjectActionTypes.FETCH_PROJECT_ERROR:
			return { ...state, loading: false, error: action.payload }


		default:
			return state







	}
}