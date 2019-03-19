const inital = {
    activeUser: false
}

export const activeUserBool = (state = inital, action) => {
    switch(action.type) {
        case "LOGIN_USER_SUCCESS":
            return {
                activeUser: action.data.success
            }
        default:
            return state;
    }
}