import React, { useContext } from 'react'

import {countContext} from './A'

function H() {
  var {state, dispatch} = useContext(countContext)
  return (
    <div>
      <h3>H: count: {state.count}</h3>
      <button onClick={()=>dispatch({type: 'INCREASE'})}>increase</button>
      <button onClick={()=>dispatch({type: 'DECREASE'})}>increase</button>
      <button onClick={()=>dispatch({type: 'RESET'})}>increase</button>
    </div>
  )
}

export default H