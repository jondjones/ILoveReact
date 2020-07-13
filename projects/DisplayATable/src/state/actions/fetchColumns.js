import { mockFetch } from '../../back-end/server'
import {
    COLUMN_DATA_REQUEST,
    COLUMN_DATA_SUCCESS,
    COLUMN_DATA_ERROR
} from '../constants/actionTypes';

const fetchDataRequest = () => ({
    type: COLUMN_DATA_REQUEST
});

const fetchDataSuccess = response => ({
    type: COLUMN_DATA_SUCCESS,
    response
});

const fetchDataError = error => ({
    type: COLUMN_DATA_ERROR,
    error
});

const fetchColumns = () => async (dispatch) => {
    dispatch(fetchDataRequest());
    return mockFetch('/columns')
        .then(response => {
            dispatch(fetchDataSuccess(response));
        })
        .catch(error => {
            dispatch(fetchDataError(error.message));
        });

};

export default fetchColumns;