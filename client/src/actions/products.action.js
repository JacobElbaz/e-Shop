import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_ERRORS = "GET_PRODUCTS_ERRORS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_TREND = "GET_TREND";
export const GET_LATEST = "GET_LATEST";
export const GET_DEALS = "GET_DEALS";
export const GET_BEST = "GET_BEST";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProducts = ( keyword = '', category = '', genre = '', sort = '') => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/`, {params: {keyword, category, genre, sort}});
            dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
};

export const getProduct = (pid) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/${pid}`);
            dispatch({ type: GET_PRODUCT, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
};

export const deleteProduct = (pid) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .delete(`${process.env.REACT_APP_API_URL}api/product/${pid}`);
            dispatch({ type: DELETE_PRODUCT, payload: pid });
        } catch (err) {
            return console.log(err);
        }
    }

};


export const getTrend = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/trend`);
            dispatch({ type: GET_TREND, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
}

export const getLatest = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/latest`);
            dispatch({ type: GET_LATEST, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
}

export const getDeals = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/deals`);
            dispatch({ type: GET_DEALS, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
}

export const getBestSeller = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/product/best-seller`);
            dispatch({ type: GET_BEST, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
}