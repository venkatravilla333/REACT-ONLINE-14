import React, { useReducer, useState } from 'react'

function Parent() {
  // var [count, setCount] = useState( 0 )
  
  // let increase = () => {
  //   setCount(count+1)
  // }
  // let decrease = () => {
  //   setCount(count-1)
  // }
  // let reset = () => {
  //   setCount(0)
  // }

  let initialState = {count: 0}

  let countReducer = (state= initialState, action) => {
    switch (action.type) {
      case 'INCREASE':
        return {
          count: state.count + action.payload
        }
        break;
      case 'DECREASE':
        return {
          count: state.count - action.payload
        }
        break;
      case 'RESET':
        return {
          count: state.count=0
        }
        break;
      default: 
        return state
    }
  }

  let [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={()=>dispatch({type: 'INCREASE', payload: 10})}>increase</button>
      <button onClick={() => dispatch({type: 'DECREASE', payload: 10})}>decrease</button>
      <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
    </div>
  )
}

export default Parent