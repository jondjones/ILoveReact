import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import news from '../state/reducers/news'
import filter from '../state/reducers/filter'

// Create Store.
export default () =>{
    const store = createStore(
        combineReducers({news, filter}),
        applyMiddleware(thunk)
    );

    return store
};