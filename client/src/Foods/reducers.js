export const loadFoodData = (state = [], action) => {
    switch(action.type) {
        case "LOAD_FOOD_LIST_SUCCESS":
            return [
                ...state,
                ...action.data
            ]
        default: 
            return state;
    }
}