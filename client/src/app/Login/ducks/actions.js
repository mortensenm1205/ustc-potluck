import axios from 'axios';

const loginUserSuccess = userData => {
    return {
        type: "LOGIN_USER_SUCCESS",
        data: userData
    }
}

export const loginUser = userData => {
    return dispatch => {
        axios.post('/api/user/', { username: userData.username, password: userData.password })
            .then(res => {
                console.log(res.data);
                dispatch(loginUserSuccess(res.data))
            })
            .catch(err => console.error(err))
    }
}