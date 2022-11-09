import { MissionActionTypes } from "../../enums/actionTypes";
import { IUser } from "./user";




export interface missionState {
	missions: Mission[];
	loading: boolean;
	error: string | null


}




export interface Mission {
	id: number;
	name: string;
	description: string;
	startTime?: Date;
	endTime?: Date;
	fromUser: IUser;
	toUsers: Array<IUser>;
	fromUserId: number;


}

interface FetchMissionAction {
	type: MissionActionTypes.FETCH_MISSIONS

}

interface FetchMissionSuccessAction {
	type: MissionActionTypes.FETCH_MISSIONS_SUCCESS,
	payload: Mission[]


}

interface FetchMissionErrorAction {
	type: MissionActionTypes.FETCH_MISSIONS_ERROR,
	payload: string

}


export type MissionAction = FetchMissionAction | FetchMissionSuccessAction | FetchMissionErrorAction






