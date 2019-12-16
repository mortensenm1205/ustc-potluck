import axios from 'axios';

export const loadPotluckListSuccess = potluckList => {
    return {
        type: "LOAD_POTLUCK_LIST_SUCCESS",
        list: potluckList
    }
}

export const addPotluckItemSuccess = potLuckItem => {
    return {
        type: "ADD_POTLUCK_ITEM_SUCCESS",
        item: potLuckItem,
        errorMessage: false
    }
}

export const addPotluckItemFailure = error_message => {
    return {
        type: "ADD_POTLUCK_ITEM_FAILURE",
        message: error_message,
        errorMessage: true
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
    return dispatch => {
        let { name, item } = potLuckItem;
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
        }) //End of axios .then promise
        .catch(e => {
            console.log(e.response.status)
            if(e.response.status === 500) e.response.message = "Form is empty. Please enter someting in the name and item field";
            dispatch(addPotluckItemFailure(e.response.message));
        }) // End of axios .catch promise
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