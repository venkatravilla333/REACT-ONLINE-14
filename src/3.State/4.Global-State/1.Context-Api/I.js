import React, { useContext, useState } from 'react'

import {nameCotext, x} from './A'

function I(props) {
   
  // var value = x._currentValue
  

  let value = useContext(x)
  let name = useContext(nameCotext)
  
  return (
    <div>
      <h3>I : {value} </h3>
      <h3>Name: {name}</h3>
      <button >update x</button>
    </div>
  )
}

export default I