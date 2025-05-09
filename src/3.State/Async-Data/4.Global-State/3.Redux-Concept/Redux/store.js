import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxlogger from 'redux-logger'
import { cakeReducer } from './cake/CakeReducer'
import { curdReducer } from './curd/curdReducer'
import { postsReducer } from './posts/postsReducer';

import { thunk } from 'redux-thunk'



let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer,
  posts: postsReducer
})

export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxlogger, thunk)))

console.log(store)