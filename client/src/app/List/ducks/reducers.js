export const potluckData = (state = { data: [], errorMessage: {}}, action) => {
    switch(action.type) {
        case "LOAD_POTLUCK_LIST_SUCCESS":
            return {
                ...state,
                data: [
                    ...state.data,
                    ...action.list
                ]
            }
        case "ADD_POTLUCK_ITEM_SUCCESS": 
            return {
                ...state,
                data: [
                    ...state.data,
                    action.item
                ],
                errorMessage: {
                    ...state.errorMessage.remove,
                    remove: action.errorMessage
                }
            }
        case "ADD_POTLUCK_ITEM_FAILURE":
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.message,
                    remove: action.errorMessage
                }
            }
        case "REMOVE_POTLUCK_ITEM_SUCCESS": 
            return {
                ...state,
                data: state.data.filter((state_item, index) => index !== action.data)
            }
        default:
            return state;
    }
}