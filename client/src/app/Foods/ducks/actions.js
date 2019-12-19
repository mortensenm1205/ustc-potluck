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
                .then(res => dispatch(addFoodItemSuccess(res.data.food)))
                .catch(e => console.log({ message: e.response.data.message, status: e.response.status, statusText: e.response.statusText}));
        });
    } 
}

export const removeFoodItem = (arrOfFoodItems, index, callback) => {
    return dispatch => {
        arrOfFoodItems.forEach((arrFoodItem, foodItemIndex) => {
          if (foodItemIndex === index) {
              axios
                .delete(
                    "api/foods", 
                    { params: { foodItem: arrFoodItem.item } 
                })
                .then(res => {
                    callback();
                })
                .catch(e => console.log(e));
          }
        });
    }
}