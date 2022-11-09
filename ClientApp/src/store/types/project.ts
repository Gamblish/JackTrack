import { ProjectActionTypes } from "../../enums/actionTypes";




export interface projectState {
	projects: Project[];
	loading: boolean;
	error: string | null


}




export interface Project {
	id:number;
	name:string;
	description:string;
	created:Date;

}

interface FetchProjectAction {
	type: ProjectActionTypes.FETCH_PROJECT

}

interface FetchProjectSuccessAction {
	type: ProjectActionTypes.FETCH_PROJECT_SUCCESS,
	payload: Project[]


}

interface FetchProjectErrorAction {
	type: ProjectActionTypes.FETCH_PROJECT_ERROR,
	payload: string

}


export type ProjectAction = FetchProjectAction | FetchProjectSuccessAction | FetchProjectErrorAction






