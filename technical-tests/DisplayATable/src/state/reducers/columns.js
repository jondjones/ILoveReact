import {
    COLUMN_DATA_REQUEST,
    COLUMN_DATA_SUCCESS,
    COLUMN_DATA_ERROR
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    response: {},
    error: null
};

const columns = (state = initialState, { type, error, response }) => {
    switch (type) {
        case COLUMN_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case COLUMN_DATA_SUCCESS:
            return {
                isFetching: false,
                columns: response,
                error: null
            };
        case COLUMN_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error
            };
        default:
            return state;
    }
};

export default columns;