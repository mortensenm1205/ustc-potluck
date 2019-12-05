import axios from 'axios';

export const loadFoodListSuccess = foodList => {
        return {
            type: "LOAD_FOOD_LIST_SUCCESS",
            data: foodList
        }
}

export const addFoodItemSuccess = foodItem => {
    return {
        type: "ADD_FOOD_ITEM_SUCCESS",
        data: foodItem
    }
}

export const loadFoodList = () => {
    return dispatch => {
        axios.get('/api/foods/getFoods')
            .then(res => dispatch(loadFoodListSuccess(res.data.food)))
            .catch(e => console.log(e))
    }
} 

export const addFoodItem = foodItem => {
    return dispatch => {
        foodItem.forEach(element => {
            axios
              .post("/api/foods/addFood", { item: element })
              .then(res => console.log(res))
              .catch(e => console.log(e));
        });
    }
}