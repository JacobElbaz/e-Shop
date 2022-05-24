import axios from 'axios';

export const ADD_DATE = 'ADD_DATE';

export const addDate = (newDate) => async (dispatch, getState) => {

    
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API_URL}api/dates/`, {newDate});
  
      dispatch({ type: ADD_DATE, payload: data });
  
    } catch (error) {
      console.log(error);
    }
  };