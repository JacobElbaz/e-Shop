import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import allProductsReducer from './products.reducer';
import productReducer from './product.reducer';
import trendProductsReducer from './trendProducts.reducer';

export default combineReducers({
    userReducer,
    allProductsReducer,
    productReducer,
    trendProductsReducer,
})