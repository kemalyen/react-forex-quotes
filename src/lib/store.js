import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import thunk from 'redux-thunk'
import quotes from './reducers/quotes'
 
const reducer = combineReducers({
     quotes
}) 

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)