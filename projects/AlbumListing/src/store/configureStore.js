import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import songs from '../state/reducers/songs'

// Create Store.
export default () =>{
    const store = createStore(
        combineReducers({songs}),
        applyMiddleware(thunk)
    );

    return store
};