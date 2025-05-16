import React, { useState } from 'react'
import useCount from './useCount'

function Count3() {
  //  var [count, setCount] =  useState(0)

  // let updateCount = () => {
  //   setCount(count+1)
  // }
 var [count, updateCount] = useCount()
  return (
    <div>
      <h2>Count3: {count}</h2>
      <button onDoubleClick={updateCount}>update count3</button>
    </div>
  )
}

export default Count3