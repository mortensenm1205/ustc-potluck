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

/* 
    I created two action creators for error handling for easier manipulation. 
    One provides the error message, one is a error boolean 
*/
export const addPotluckItemFailureMessage = error_code => {
    return {
        type: "ADD_POTLUCK_ITEM_FAILURE_MESSAGE",
        data: error_code
    }
}

export const addPotluckItemFailureBool = error_bool => {
    return {
        type: "ADD_POTLUCK_ITEM_FAILURE_BOOL",
        bool: error_bool
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
                /* 
                    I'm using the error action creators here as well as a toggle type logic, 
                    once a pot luck item is successfull, then we turn off the error action with 
                    a null value for the message and false for the boolean. 

                    I use this so that it's easier to display on the List Container component 
                */
                dispatch(addPotluckItemFailureMessage(null));
                dispatch(addPotluckItemFailureBool(false));
                callback();
            } else if (non_listed_obj !== undefined) {
                dispatch(addPotluckItemSuccess(non_listed_obj));
                // Same here as explained above
                dispatch(addPotluckItemFailureMessage(null));
                dispatch(addPotluckItemFailureBool(false))
                callback();
            }
        })
        .catch(e => {
            e.response.message = 'Form is empty. Please enter your Name and the Item you are bringing.';
            /* 
                This is where i turn on the error action creators, by inserting a message 
                and turning the boolean to true.   
            */
            dispatch(addPotluckItemFailureMessage(e.response.message));
            dispatch(addPotluckItemFailureBool(true));
        }) // End of axios .then promise
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