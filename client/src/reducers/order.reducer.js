import { UPDATE_STATUS } from '../actions/order.action';

const initialState = {};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload,
            };

        default:
            return state;
    }
}

