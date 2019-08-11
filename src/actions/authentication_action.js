import * as getAPI from '../api/get_api'
import * as authTypes from '../types/auth_type'
import { AsyncStorage } from 'react-native';

export const signin = data => {
    return async dispatch => {
        let getResponse = await getAPI.signin(data)
        if (getResponse.status == 200) {
            dispatch({
                type: authTypes.AUTH_OPERATION,
                payload: getResponse.data
            })
        } else {

        }
    }
}

export const logout = () => {
    return async dispatch => {
        const value = await AsyncStorage.removeItem('@auth_key');
        if (value == null) {
            dispatch({
                type: authTypes.LOGOUT
            })
        }
    }
}

export const retrieveData = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('@auth_key');
        if (value !== null) {
            dispatch({
                type: authTypes.ON_LOAD,
                payload: value
            })
        }
    }
};