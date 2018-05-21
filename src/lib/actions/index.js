import fetch from 'cross-fetch';
import * as constants from '../constants'

function fetchTodosRequest() {
  return {
    type: constants.FETCH_QUOTES_REQUEST
  }
}

function getQuotesSuccess(body) {
  return {
    type: constants.GET_QUOTES,
    body
  }
}

function getQuotesFailure(body) {
  return {
    type: constants.ERROR_HANDLER,
    body
  }
}

export function getQuotes(symbols = null) {
  const api_key = process.env.REACT_APP_API_KEY
  console.log("Api Key:" + api_key)
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch(`${constants.API_URL}?pairs=${symbols}&api_key=${api_key}`)
      .then(res => res.json())
      .then(body => dispatch(getQuotesSuccess(body)))
      .catch(ex => dispatch(getQuotesFailure(ex)))
  }
}
   
export function errorHandler(dispatch, errorMessage, type) {
  dispatch({
    type: constants.ERROR_HANDLER,
    payload: errorMessage,
  });
}