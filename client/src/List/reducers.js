export const loadPotluckData = (state = [], action) => {
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
            return state.slice(state.indexOf(action.data), 1, 0)
        default:
            return state;
    }
}