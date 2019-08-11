import * as authTypes from '../types/auth_type'

let initialState = {
    is_logged: false,
    user: {},
    error: ''
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.AUTH_OPERATION:
            return Object.assign({}, state, {
                is_logged: true,
                user: action.payload || {}
            })

        case authTypes.ON_LOAD:
            if(action.payload){
                return Object.assign({}, state, {
                    is_logged: true
                })
            }
        
        case authTypes.LOGOUT:
            return Object.assign({}, state, {
                is_logged: false,
                user: {}
            })

        default:
            return state
    }
}

export default AuthReducer