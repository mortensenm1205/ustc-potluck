import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { loadPotluckData } from '../List/ducks/reducers';
import { loadFoodData } from '../Foods/ducks/reducers';
import { activeUser } from '../Login/ducks/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loadPotluckData, 
    loadFoodData,
    activeUser
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)