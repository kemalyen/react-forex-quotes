import * as constants from '../constants';

const INITIAL_STATE = { quotes: [], before: [], error: null };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
      case constants.GET_QUOTES:
        return {...state, quotes: action.payload, before: state.quotes };

      case constants.ERROR_HANDLER:
      return {...state, error: action.payload };
        
      default:
        return state;
    }
}