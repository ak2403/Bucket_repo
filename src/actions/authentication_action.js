import * as getAPI from '../api/get_api'

export const signin = data => {
    return async dispatch => {
        let getResponse = await getAPI.signin(data)
        if(getResponse.status == 200){
            console.log(getResponse)
        }
    }
}