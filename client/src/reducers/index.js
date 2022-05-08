import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import allProductsReducer from './products.reducer';
import productReducer from './product.reducer';
import trendProductsReducer from './trendProducts.reducer';

export default combineReducers({
    usersReducer,
    userReducer,
    allProductsReducer,
    productReducer,
    trendProductsReducer,
})