import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_ERRORS = "GET_PRODUCTS_ERRORS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getProducts = (num) => {
    return (dispatch) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/product/`)
            .then((res) => {
                const array = res.data.slice(0,num);
                dispatch({type: GET_PRODUCTS, payload: array});
                dispatch({type: GET_ALL_PRODUCTS, payload: res.data});
            })
            .catch((err) => console.log(err));
    };
};

export const deleteProduct = (pid) => {

};