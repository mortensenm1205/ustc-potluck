import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { loadPotluckData } from '../List/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loadPotluckData
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)