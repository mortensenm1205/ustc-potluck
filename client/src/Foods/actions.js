import axios from 'axios';

export const loadFoodListSuccess = foodList => {
    if(foodList.length !== 0) {
        console.log("Foodlist true:", foodList)
        return {
            type: "LOAD_FOOD_LIST_SUCCESS",
            data: foodList
        }
    }

    console.log("No food list: ", foodList)
    return {
        type: "LOAD_FOOD_LIST_SUCCESS",
        data: foodList
    }
}

export const loadFoodList = () => {
    return dispatch => {
        axios.get('/api/foods/getFoods')
            .then(res => dispatch(loadFoodListSuccess(res.data.food)))
            .catch(e => console.log(e))
    }
} 