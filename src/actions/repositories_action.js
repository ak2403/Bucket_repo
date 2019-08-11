import * as getAPI from '../api/get_api'
import * as repoTypes from '../types/repositories_type'

export const getRepos = () => {
    return async dispatch => {
        let getResponse = await getAPI.getRepos()
        if(getResponse.status === 200){
            dispatch({
                type: repoTypes.GET_REPOS,
                payload: getResponse.data
            })
        }
    }
}

export const getRepoCommits = id => {
    return async dispatch => {
        let getResponse = await getAPI.getRepoCommits(id)
        if(getResponse.status === 200){
            dispatch({
                type: repoTypes.GET_REPO_COMMITS,
                payload: getResponse.data
            })
        }
    }
}