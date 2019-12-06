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

export const removeFoodItemSuccess = foodItem => {
    return {
        type: "REMOVE_FOOD_ITEM_SUCCESS",
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
              .then(res => dispatch(addFoodItemSuccess(res.data.food)))
              .catch(e => console.log(e));
        });
    }
}

export const removeFoodItem = foodItem => {
    return dispatch => {
        axios.delete(
            'api/foods', 
            { params: { foodItem }}
        )
        .then(res => console.log(res))
        .catch(e => console.log(e))

    }
}