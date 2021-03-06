import { createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import mainreducer from './rootReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainreducer, 
    composeEnhancers(applyMiddleware(thunk))    
);

export default store;