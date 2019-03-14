export const loadFoodData = (state = [], action) => {
    switch(action.type) {
        case "LOAD_FOOD_LIST_SUCCESS":
            return [
                ...action.data
            ]
        default: 
            return state;
    }
}