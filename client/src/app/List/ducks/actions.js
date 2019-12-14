import axios from 'axios';

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

export const addPotluckItemFailure = error_code => {
    return {
        type: "ADD_POTLUCK_ITEM_FAILURE",
        data: error_code
    }
}

export const removePotluckItemSuccess = potLuckItemIndex => {
    return {
        type: "REMOVE_POTLUCK_ITEM_SUCCESS",
        data: potLuckItemIndex
    }
}

export const loadPotluckList = () => {
    return dispatch => {
        axios.get('/api/plList/getPotLuckList')
            .then(res => dispatch(loadPotluckListSuccess(res.data)))
            .catch(e => console.log(e))
    }
}


export const addPotluckItem = (potLuckItem, callback) => {
    let { name, item } = potLuckItem;
    return dispatch => {
        axios.post(
            '/api/plList/addPotLuckItem',
            { name, item }
        )
        .then(res => {
            const { data } = res;
            const { listed_obj, non_listed_obj } = data;
            if(listed_obj !== undefined) {
                dispatch(addPotluckItemSuccess(listed_obj));
                callback();
            } else if (non_listed_obj !== undefined) {
                dispatch(addPotluckItemSuccess(non_listed_obj));
                callback();
            }
        })
        // Will creat this into a more structed custom Error funtion
        // This is just a reminder for now
        .catch(e => console.log(e)) // End of axios .then promise
    } // End of dispatch function    
}

export const removePotluckItem = (potLuckItem, index, callback) => {
    return dispatch => {
        axios.delete(
            '/api/plList',
            { params: { plItem: potLuckItem.item }})
        .then(res => {
            const { data } = res;
            const { listed_obj, non_listed_obj } = data;
            if (listed_obj !== undefined) {
                dispatch(removePotluckItemSuccess(index));
                callback();
            } else if (non_listed_obj !== undefined) {
                dispatch(removePotluckItemSuccess(index));
                callback();
            }
        })
        .catch(e => console.log(e))
    }
}