import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { potluckData } from '../List/ducks/reducers';
import { loadFoodData } from '../Foods/ducks/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    potluckData, 
    loadFoodData,
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger)
    )
)