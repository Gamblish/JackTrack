import { combineReducers } from "redux";

import { missionReducer } from "./missionReducer";
import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	mission: missionReducer,
	user: userReducer,
	project: projectReducer




})


export type RootState = ReturnType<typeof rootReducer>