import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { potluckData, potluckDataError } from '../List/ducks/reducers';
import { foodData } from '../Foods/ducks/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    potluckData, 
    potluckDataError,
    foodData,
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger)
    )
)