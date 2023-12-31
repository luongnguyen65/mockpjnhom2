import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';


const composeEnhancers = 
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) : compose;

const store = createStore(composeEnhancers(applyMiddleware(thunk)))

export default store;   