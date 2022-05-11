import axios from 'axios';
export const CREATE_ORDER = 'CREATE_ORDER';


export const createOrder = (order) => {
    return async (dispatch) => {
    try {
        const res = await axios
        .post(`${process.env.REACT_APP_API_URL}api/order`, order);
        dispatch({type: CREATE_ORDER})
    } catch(err) {
        console.log(err);
    }}
}