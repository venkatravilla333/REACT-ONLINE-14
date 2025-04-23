import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  // var x = 100
 var [x, setX] = useState(100)

  function getData(data) {
    console.log(data)
    setX(data)
  }


  return (
    <div>
      <h3>Parent : {x}</h3>
      <Child1 getData = {getData} />
      <Child2  />
    </div>
  )
}

export default Parent