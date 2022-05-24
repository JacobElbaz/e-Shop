import { GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/products.action";

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    case DELETE_PRODUCT:
      return {...state};
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: action.payload,
      }
    default: 
      return state;
  }
}