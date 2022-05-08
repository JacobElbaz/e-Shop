import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import allProductsReducer from './products.reducer';
import productReducer from './product.reducer';
import trendProductsReducer from './trendProducts.reducer';
import latestProductsReducer from './latestProducts.reducer';
import bestSellerReducer from './bestSeller.reducer';
import dealsProductsReducer from './bestDeals.reducer';

export default combineReducers({
    userReducer,
    allProductsReducer,
    productReducer,
    trendProductsReducer,
    latestProductsReducer,
    bestSellerReducer,
    dealsProductsReducer,
})