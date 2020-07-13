import {
    DATA_REQUEST,
    DATA_SUCCESS,
    DATA_ERROR
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    response: {},
    error: null
};

const news = (state = initialState, { type, error, response }) => {
    switch (type) {
        case DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_SUCCESS:
            return {
                isFetching: false,
                columns: response,
                error: null
            };
        case DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error
            };
        default:
            return state;
    }
};

export default news;