import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_ERRORS = "GET_USER_ERRORS";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USERS = "GET_USERS";
export const UPDATE_WISH_PRODUCT = "UPDATE_WISH_PRODUCT";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios
        .get(`${process.env.REACT_APP_API_URL}api/client/${uid}`);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const updateWishProduct = (productId, userId) => async (dispatch, getState) => {

  try {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}api/client/wishlist`, { productId, userId });

    dispatch({ type: UPDATE_WISH_PRODUCT, payload: data });

    handleWishListInLocalStorage(productId, data);
  } catch (error) {
    console.log(error);
  }
};


export const updateProfile = (userId, username, password) => {
  return async (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/client/` + userId ,
      data: { username, password },
    })
      .then((res) => {
        dispatch({ type: UPDATE_PROFILE, payload: username });
      })
      .catch((err) => console.log(err));
  };
};

export const forgot_password = (email, password) => {
  return async (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/client/forgotpassword`,
      data: { email, password },
    })
    .then((res) => {
      dispatch({ type: FORGOT_PASSWORD, payload: password });
    })
    .catch((err) => console.log(err));
  }
}



export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios
        .get(`${process.env.REACT_APP_API_URL}api/client/`);
      dispatch({ type: GET_ALL_USERS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  }

}

export const deleteUser = () => { }

const handleWishListInLocalStorage = (productId, newWishList) => {
  const authFromStorage = JSON.parse(localStorage.getItem('auth'));
  const alreadyExisted = authFromStorage.wishlist.find(
    (wish) => wish._id === productId
  );

  if (alreadyExisted) {
    authFromStorage.wishlist = authFromStorage.wishlist.filter(
      (wish) => wish._id !== productId
    );
  } else {
    authFromStorage.wishlist = [...newWishList];
  }

  localStorage.setItem('auth', JSON.stringify(authFromStorage));
};