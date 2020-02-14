import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import news from '../state/reducers/news'

// Create Store.
export default () =>{
    const store = createStore(
        combineReducers({news}),
        applyMiddleware(thunk)
    );

    return store
};