import { combineReducers } from 'redux'
import AuthReducer from './auth_reducer'

const Reducers = combineReducers({
    authentication: AuthReducer
})

export default Reducers
