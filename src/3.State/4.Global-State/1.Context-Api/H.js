import React, { useContext, useState } from 'react'
import { colorCotext, countContext, x } from './A'

function H(props) {
 
  // let value = x._currentValue

 var {count, updateCount} = useContext(countContext)
 var color = useContext(colorCotext)
  
  return (
    <div>
      <h3>H : {count} </h3>
      <button onClick={updateCount}>update count</button>
      <h3>H  color : {color} </h3>
    </div>
  )
}

export default H