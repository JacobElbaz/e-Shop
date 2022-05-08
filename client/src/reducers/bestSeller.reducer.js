import { GET_BEST } from "../actions/products.action";

const initialState = {};

export default function bestSellerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEST:
      return action.payload
    default: 
      return state;
  }
}