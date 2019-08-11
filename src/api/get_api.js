import axios from 'axios'

export const signin = data => {
    return axios.get('https://api.bitbucket.org/2.0/users/akspikey', {
        headers: {
            Authorization: `Basic YWlzaHdhcnlha0B2aXN1YWxiaS5jb206U29ueXNhdGlvMSE=`
        }        
    }).then(response => {
        console.log("hi")
        return {
            status: 200,
            data: response.data
        }
    }).catch(err => {
        console.log("error")
        return {
            status: 400,
            message: 'Incorrect details'
        }
    })
}