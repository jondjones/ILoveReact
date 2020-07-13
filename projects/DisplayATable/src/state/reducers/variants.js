import {
    VARIANT_DATA_REQUEST,
    VARIANT_DATA_SUCCESS,
    VARIANT_DATA_ERROR
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    response: {},
    error: null
};

const variants = (state = initialState, { type, error, response }) => {
    switch (type) {
        case VARIANT_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case VARIANT_DATA_SUCCESS:
            return {
                isFetching: false,
                variants: response,
                error: null
            };
        case VARIANT_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error
            };
        default:
            return state;
    }
};

export default variants;