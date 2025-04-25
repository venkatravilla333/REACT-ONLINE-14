import React, { useContext, useState } from 'react'
import { colorCotext, x } from './A'

function H(props) {
 
  // let value = x._currentValue

 var value = useContext(x)
 var color = useContext(colorCotext)
  
  return (
    <div>
      <h3>H : {value} </h3>
      <h3>H  color : {color} </h3>
      <button>update x</button>
    </div>
  )
}

export default H