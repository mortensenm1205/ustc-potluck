export const potluckData = (state = [], action) => {
    switch(action.type) {
        case "LOAD_POTLUCK_LIST_SUCCESS":
            return [
               ...state,
               ...action.data
            ]
        case "ADD_POTLUCK_ITEM_SUCCESS": 
            return [
                ...state,
                action.data
            ]
        case "REMOVE_POTLUCK_ITEM_SUCCESS": 
            return state.filter((state_item, index) => index !== action.data)
        default:
            return state;
    }
}

export const potluckDataError = (state = null, action) => {
    switch(action.type) {
        case "ADD_POTLUCK_ITEM_FAILURE": 
            return action.data;
        default:
            return state;
    }
}