import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
  let [x, setX] = useState(0)
  
  let updateX = () => {
    setX(x+1)
  }
  return (
    <div>
      <B x={x} updateX={updateX } />
      <C x= {x}  updateX={updateX }/>
    </div>
  )
}

export default A