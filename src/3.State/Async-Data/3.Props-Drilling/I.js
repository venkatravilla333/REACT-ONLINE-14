import React, { useState } from 'react'

function I(props) {
  console.log(props.x)
  // let [x, setX] = useState(0)

  // let updateX = () => {
  //   setX(x+1)
  // }
  
  console.log('render')
  return (
    <div>
      <h3>I : {props.x}</h3>
      <button onClick={props.updateX}>update x</button>
    </div>
  )
}

export default I