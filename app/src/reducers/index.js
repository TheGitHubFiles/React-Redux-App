import { GATHERING_DATA, FOUND_DATA, DATA_NOT_FOUND } from '../actions'
const initialState = {
    isLodaing: false,
    card: [],
    error: ''
}

export const rickReducer = (state = initialState, action) => {
    switch (action.type) {
        case GATHERING_DATA:
            return {
                ...state,
                isLoading: true,
                error: ''

            };
        case FOUND_DATA:
            return {
                ...state,
                isLoading: false,
                card: action.payload
            };
        case DATA_NOT_FOUND:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}