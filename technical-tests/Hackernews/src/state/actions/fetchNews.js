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

const fetchData = (pageNumber = 1) => async (dispatch) => {
    fetchDataRequest();
    const api = `https://api.hnpwa.com/v0/newest/${pageNumber}.json`;
    console.log(api)
    return axios.get(api)
        .then(response => {
            dispatch(fetchDataSuccess(response));
        })
        .catch(error => {
            dispatch(fetchDataError(error.message));
            throw error;
        });
}

export default fetchData;