import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import allProductsReducer from './products.reducer';
import productReducer from './product.reducer';

export default combineReducers({
    userReducer,
    allProductsReducer,
    productReducer,
})