import { 
    createStore, 
    combineReducers, 
    compose, 
    applyMiddleware 
} from 'redux';

import { potluckData } from '../List/ducks/reducers';
import { foodData } from '../Foods/ducks/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    potluckData, 
    foodData,
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)