export const loadFoodData = (state = [], action) => {
    switch (action.type) {
      case "LOAD_FOOD_LIST_SUCCESS":
        return [
            ...action.data
        ];
      case "ADD_FOOD_ITEM_SUCCESS":
        return [
            ...state, 
            action.data
        ];
      case "REMOVE_FOOD_ITEM_SUCCESS":
        return state.filter((state_item, index) => index !== action.data);
      default:
        return state;
    }
}