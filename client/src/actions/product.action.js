import axios from 'axios';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_CANCELLED,
} from '../types/product';

export const fetchProduct = (id, cancelToken) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });

  try {
    const { data } = await axios.get(`/api/product/${id}`, { cancelToken });

    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isCancel(error)) {
      dispatch({ type: FETCH_PRODUCT_CANCELLED });
    } else {
      dispatch({
        type: FETCH_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};
