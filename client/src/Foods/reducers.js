export const loadFoodData = (state = [], action) => {
    switch(action.type) {
        case "LOAD_FOOD_LIST_SUCCESS":
            if (action.data.length !== 0) {
                return [
                    ...state,
                    ...action.data
                ]
            }
            return [
                ...state
            ]
        default: 
            return state;
    }
}