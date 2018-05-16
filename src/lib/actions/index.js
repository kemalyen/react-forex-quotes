import axios from 'axios'
import * as constants from '../constants'

export function getQuotes(symbols = null, api_key = null) {
  return function (dispatch) {
    axios.get(`${constants.API_URL}?pairs=${symbols}&api_key=${api_key}`)
    .then((response) => {

      if (response.data.error){
        dispatch({
          type: constants.ERROR_HANDLER,
          payload: response.data.message,
        });
      }else{
        dispatch({
          type: constants.GET_QUOTES,
          payload: response.data,
        });
      }

    })
    .catch(response => dispatch(errorHandler(response.data)));
  };
}
  
export function errorHandler(dispatch, errorMessage, type) {
  dispatch({
    type: constants.ERROR_HANDLER,
    payload: errorMessage,
  });
}