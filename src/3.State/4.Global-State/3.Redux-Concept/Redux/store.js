import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { cakeReducer } from './cake/CakeReducer'
import { curdReducer } from './curd/curdReducer'

import reduxlogger from 'redux-logger'


let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxlogger)) )
console.log(store)