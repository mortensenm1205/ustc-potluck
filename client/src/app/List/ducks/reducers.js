export const potluckData = (state = { data: [], error: {}}, action) => {
    switch(action.type) {
        case "LOAD_POTLUCK_LIST_SUCCESS":
            return { data: [
                ...state.data,
                ...action.data
             ], error: {}}
        case "ADD_POTLUCK_ITEM_SUCCESS": 
            return { data: [
                ...state.data,
                action.data
            ], error: {}}
        case "ADD_POTLUCK_ITEM_FAILURE": 
            return { data: [], error: action.data};
        case "REMOVE_POTLUCK_ITEM_SUCCESS": 
            return state.data.filter((state_item, index) => index !== action.data)
        default:
            return state;
    }
}