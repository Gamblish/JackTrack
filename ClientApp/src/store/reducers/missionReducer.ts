import { MissionActionTypes } from "../../enums/actionTypes"
import { MissionAction, missionState } from "../types/mission"




const initialState: missionState = {
	missions: [],
	loading: false,
	error: null


}


export const missionReducer = (state = initialState, action: MissionAction) => {
	switch (action.type) {
		case MissionActionTypes.FETCH_MISSIONS:
			return { ...state, loading: true }

		case MissionActionTypes.FETCH_MISSIONS_SUCCESS:

			return { ...state, loading: false, missions: action.payload }

		case MissionActionTypes.FETCH_MISSIONS_ERROR:
			return { ...state, loading: false, error: action.payload }


		default:
			return state







	}
}