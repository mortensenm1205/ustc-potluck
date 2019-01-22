import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { loadPotluckData } from '../List/reducers';
import { loadFoodData } from '../Foods/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loadPotluckData, 
    loadFoodData
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)