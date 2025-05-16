import React, { useRef, useState } from 'react'

function Variables() {
  var Nv = 0

  var [Sv, setSv] = useState(0)

  var Rv = useRef(0)

  var updateNv = () => {
    Nv++
    console.log('Nv', Nv)
  }
  var updateSv = () => {
    setSv(Sv+1)
    console.log('Sv', Sv)
  }
  var updateRv = () => {
    Rv.current++
    console.log('Rv', Rv)
  }

  console.log('render')
  return (
    <div>
      <h2>Nv: {Nv}</h2>
      <h2>Sv: {Sv}</h2>
      <h2>Rv: {Rv.current}</h2>
      <button onClick={updateNv}>update Nv</button>
      <button onClick={updateSv}>update Sv</button>
      <button onClick={updateRv}>update Rv</button>
    </div>
  )
}

export default Variables