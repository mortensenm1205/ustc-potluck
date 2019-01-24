import axios from 'axios';

export const loadPotluckListSuccess = potluckList => {
    return {
        type: "LOAD_POTLUCK_LIST_SUCCESS",
        data: potluckList
    }
}

export const addPotLuckItemSuccess = potLuckItem => {
    return {
        type: "LOAD_POTLUCK_LIST_SUCCESS",
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
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
}

export const removePotluckItem = potLuckItem => {
    return dispatch => {
        axios.delete(
            '/api/plList',
            { params: { plItem: potLuckItem.item }})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
}