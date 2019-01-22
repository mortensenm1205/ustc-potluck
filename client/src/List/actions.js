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
            .then(res => dispatch(loadPotluckListSuccess(res.data.item)))
            .catch(e => console.log(e))
    }
}

export const addPotluckItem = (location, potLuckItem) => {
    return dispatch => {
        axios.post(
            '/api/plList/addPotLuckItem',
            { name: potLuckItem.name, item: potLuckItem.item })
        .then(res => res ? location.reload() : null)
        .catch(e => console.log(e))
    }
}

export const removePotluckItem = (location, potLuckItem) => {
    return dispatch => {
        axios.delete(
            '/api/plList',
            { params: { plItem: potLuckItem.item }})
        .then(res => res ? location.reload() : null)
        .catch(e => console.log(e))
    }
}