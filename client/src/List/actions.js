import axios from 'axios';
import { loadFoodListSuccess } from '../Foods/actions';

export const loadPotluckListSuccess = potluckList => {
    return {
        type: "LOAD_POTLUCK_LIST_SUCCESS",
        data: potluckList
    }
}

export const addPotluckItemSuccess = potLuckItem => {
    return {
        type: "ADD_POTLUCK_ITEM_SUCCESS",
        data: potLuckItem
    }
}

export const removePotluckItemSuccess = potLuckItem => {
    return {
        type: "REMOVE_POTLUCK_ITEM_SUCCESS",
        data: potLuckItem
    }
}

export const loadPotluckList = () => {
    return dispatch => {
        axios.get('/api/plList/getPotLuckList')
            .then(res => dispatch(loadPotluckListSuccess(res.data)))
            .catch(e => console.log(e))
    }
}


export const addPotluckItem = potLuckItem => {
    return dispatch => {
        axios.post(
            '/api/plList/addPotLuckItem',
            { 
                name: potLuckItem.name, 
                item: potLuckItem.item
            }
        )
        .then(res => {
            const { data } = res;
            const { listed_obj, non_listed_obj } = data;
            if(listed_obj !== undefined) {
                dispatch(addPotluckItemSuccess(listed_obj));
                dispatch(loadFoodListSuccess([]))
            } else if (non_listed_obj !== undefined) {
                dispatch(addPotluckItemSuccess(non_listed_obj));
            }
        })
        .catch(e => console.log(e))
    }
}

export const removePotluckItem = (potLuckItem, index) => {
    return dispatch => {
        axios.delete(
            '/api/plList',
            { params: { plItem: potLuckItem.item }})
        .then(res => {
            const { data } = res;
            const { listed_obj, non_listed_obj } = data;
            if (listed_obj !== undefined) {
                dispatch(removePotluckItemSuccess(index));
                // console.log(index)
            } else if (non_listed_obj !== undefined) {
                dispatch(removePotluckItemSuccess(index));
                // console.log(index)
            }
        })
        .catch(e => console.log(e))
    }
}