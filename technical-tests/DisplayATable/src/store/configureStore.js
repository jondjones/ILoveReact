import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import variants from '../state/reducers/variants'
import columns from '../state/reducers/columns'

// Create Store.
export default () =>{
    const store = createStore(
        combineReducers({variants, columns}),
        applyMiddleware(thunk)
    );

    return store
};