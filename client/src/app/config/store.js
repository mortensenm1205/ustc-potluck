import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { loadPotluckData } from '../List/ducks/reducers';
import { loadFoodData } from '../Foods/ducks/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loadPotluckData, 
    loadFoodData,
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger)
    )
)