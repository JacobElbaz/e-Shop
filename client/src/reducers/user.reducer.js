import { GET_USER, UPDATE_NAME, UPDATE_WISH_PRODUCT } from '../actions/user.action';

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;

        case UPDATE_NAME:
            return {
                ...state,
                bio: action.payload,
            };

        case UPDATE_WISH_PRODUCT:
            return {
                ...state,
                data: {
                    ...state.data,
                    wishlist: [...action.payload],
                },
            };

        default:
            return state;
    }
}

