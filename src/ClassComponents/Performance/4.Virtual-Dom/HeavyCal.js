import React, { useMemo, useState } from 'react'

function HeavyCal() {
  var [count, setCount] = useState(0)
  var [num, setNum] = useState(20)

 var res = useMemo(()=>factorialFun(num), [num]) 
  let updateCount = () => {
    setCount(count+1)
  }
  console.log('render heavy')

  function factorialFun(num) {
    console.log('factorial calculation')
    var facRes = 1
    for (var i = num; i >= 1; i--){
      facRes = facRes*i
    }
    return facRes
  }

  let updateNum = () => {
    setNum(num+1)
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={updateCount}>update Count</button>
      <h2>Fact res : {res}</h2>
      <button onClick={updateNum}>update Count</button>

    </div>
  )
}

export default HeavyCal