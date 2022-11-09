import * as MissionActionCreators from './mission'
import * as UserActionCreators from './user'
import * as AuthActionCreators from './auth'
import * as ProjectActionCreators from './project'
export default {
	...MissionActionCreators,
	...UserActionCreators,
	...AuthActionCreators,
	...ProjectActionCreators
}