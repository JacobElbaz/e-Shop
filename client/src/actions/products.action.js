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

export const getProducts = (num) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/`)
            .then((res) => {
                const array = res.data.slice(0, num);
                dispatch({ type: GET_PRODUCTS, payload: array });
                dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const getProduct = (pid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/${pid}`)
            .then((res) => {
                dispatch({ type: GET_PRODUCT, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const deleteProduct = (pid) => {
    return(dispatch) => {
        return axios
                .delete(`${process.env.REACT_APP_API_URL}api/product/${pid}`)
                .then((res) => {
                    dispatch({ type: DELETE_PRODUCT, payload: pid });
                })
                .catch((err) => console.log(err));
    }

};


export const getTrend = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/trend`)
            .then((res) => {
                dispatch({ type: GET_TREND, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}

export const getLatest = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/latest`)
            .then((res) => {
                dispatch({ type: GET_LATEST, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}

export const getDeals = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/deals`)
            .then((res) => {
                dispatch({ type: GET_DEALS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}

export const getBestSeller = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/product/best-seller`)
            .then((res) => {
                dispatch({ type: GET_BEST, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}