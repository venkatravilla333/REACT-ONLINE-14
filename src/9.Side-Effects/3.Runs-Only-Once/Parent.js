import React, { useEffect, useState } from 'react'

function Parent() {
 var [x, setX] = useState(0)
 var [y, setY] = useState(0)

  let updateState = (e) => {
    console.log('state update')
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(() => {
    console.log('effect runs, event attach')
    window.addEventListener('click', updateState)
  }, [])

  return (
    <div>
      <h3>X: {x}</h3>
      <h3>Y: {y}</h3>
    </div>
  )
}

export default Parent