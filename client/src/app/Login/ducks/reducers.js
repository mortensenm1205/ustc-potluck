const inital = {
    success: false
}

export const activeUser = (state = inital, action) => {
    switch(action.type) {
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}