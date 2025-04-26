import { createStore } from 'redux'


var initialState = {
  noOfCakes : 100
}

let cakeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default: 
      return state
  }
}

export var store = createStore(cakeReducer)
console.log(store)