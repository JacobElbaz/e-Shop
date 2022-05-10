import axios from 'axios';
export const CREATE_ORDER = 'CREATE_ORDER';


export const createOrder = async (order) => {
    try {
        await axios ({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/order`,
            data: order,
        })
    } catch(err) {
        console.log(err);
    }
}