import { combineReducers } from 'redux'
import AuthReducer from './auth_reducer'
import RepoReducer from './repositories_reducer'

const Reducers = combineReducers({
    authentication: AuthReducer,
    repositories: RepoReducer
})

export default Reducers
