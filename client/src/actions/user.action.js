import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_ERRORS = "GET_USER_ERRORS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USERS = "GET_USERS"

export const getUser = (uid) => {
    return (dispatch) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/client/${uid}`)
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data});
            })
            .catch((err) => console.log(err));
    };
};

export const getAllUsers = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/client/`)
        .then((res)=> {
            dispatch({ type: GET_ALL_USERS, payload: res.data });
        })

    }

}

export const deleteUser = () => {}