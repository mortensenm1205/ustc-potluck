import axios from 'axios';

export const loadPotluckListSuccess = potluckList => {
    return {
        type: "LOAD_POTLUCK_LIST_SUCCESS",
        data: potluckList
    }
}

export const loadPotluckList = () => {
    return dispatch => {
        axios.get('/api/plList/getPotLuckList')
            .then(res => {
                if(!res) {
                    return "PotLuck List doesn't exist."
                }
                JSON.parse(res);
            })
            .then(res => dispatch(loadPotluckListSuccess(res)))
            .catch(e => console.log(e))
    }
}