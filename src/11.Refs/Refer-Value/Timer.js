import React, { useEffect, useRef, useState } from 'react'

function Timer() {
  var [timer, setTimer] = useState(0)

  let myRef
  console.log(myRef.current)
  
  useEffect(() => {
    myRef.current = setInterval(() => {
      setTimer((preTimer)=> preTimer+1)
    }, 1000)
    return () => {
      clearInterval(myRef.current)
    }
  })
  return (
    <div>
      <h2>Timer: {timer}</h2>
      <button onClick={()=>clearInterval(myRef.current)}>stop</button>
    </div>
  )
}

export default Timer