import { combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/CakeReducer'
import { curdReducer } from './curd/curdReducer'


let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export var store = createStore(rootReducer)
console.log(store)