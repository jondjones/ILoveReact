import {
    FETCH_SONGS_REQUEST,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_ERROR
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    response: {},
    error: null
};

const songs = (state = initialState, { type, error, response }) => {
    switch (type) {
        case FETCH_SONGS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SONGS_SUCCESS:
            return {
                isFetching: false,
                items: response.data,
                error: null
            };
        case FETCH_SONGS_ERROR:
            return {
                ...state,
                isFetching: false,
                error
            };
        default:
            return state;
    }
};

export default songs;
