import React, { useContext, useState } from 'react'

import {countContext, nameCotext, x} from './A'

function I(props) {
   
  // var value = x._currentValue
  

  let { count, updateCount } = useContext(countContext)
  let name = useContext(nameCotext)
  
  return (
    <div>
      <h3>I : {count} </h3>
      <h3>Name: {name}</h3>
      <button onClick={updateCount}>update count</button>
    </div>
  )
}

export default I