import { mockFetch } from '../../back-end/server'
import {
    VARIANT_DATA_REQUEST,
    VARIANT_DATA_SUCCESS,
    VARIANT_DATA_ERROR
} from '../constants/actionTypes';

const fetchDataRequest = () => ({
    type: VARIANT_DATA_REQUEST
});

const fetchDataSuccess = response => ({
    type: VARIANT_DATA_SUCCESS,
    response
});

const fetchDataError = error => ({
    type: VARIANT_DATA_ERROR,
    error
});

const fetchVariant = () => async (dispatch) => {
    fetchDataRequest();
    return mockFetch('/variant')
        .then(response => {
            dispatch(fetchDataSuccess(response));
        })
        .catch(error => {
            dispatch(fetchDataError(error.message));
        });
}

export default fetchVariant;