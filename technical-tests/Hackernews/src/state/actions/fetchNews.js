import axios from 'axios'
import {
    DATA_REQUEST,
    DATA_SUCCESS,
    DATA_ERROR
} from '../constants/actionTypes';

const fetchDataRequest = () => ({
    type: DATA_REQUEST
});

const fetchDataSuccess = response => ({
    type: DATA_SUCCESS,
    response
});

const fetchDataError = error => ({
    type: DATA_ERROR,
    error
});

const fetchData = () => async (dispatch) => {
    fetchDataRequest();

    return axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
        .then(response => {
            dispatch(fetchDataSuccess(response));
        })
        .catch(error => {
            dispatch(fetchDataError(error.message));
            throw error;
        });
}

export default fetchData;