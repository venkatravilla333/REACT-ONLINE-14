import React, { useState } from 'react'

function I() {
  let [x, setX] = useState(0)

  let updateX = () => {
    setX(x+1)
  }
  
  console.log('render')
  return (
    <div>
      <h3>I : {x}</h3>
      <button onClick={updateX}>update x</button>
    </div>
  )
}

export default I