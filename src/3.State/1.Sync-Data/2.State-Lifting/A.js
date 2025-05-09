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
      <B />
      <C />
    </div>
  )
}

export default A