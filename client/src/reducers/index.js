import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import allProductsReducer from './products.reducer';

export default combineReducers({
    userReducer,
    allProductsReducer,
})