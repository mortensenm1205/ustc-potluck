export const loadPotluckData = (state = [], action) => {
    switch(action.type) {
        case "LOAD_POTLUCK_LIST_SUCCESS":
            return [
                ...state.data,
                {...action.data}
            ]
        default:
            return state;
    }
}