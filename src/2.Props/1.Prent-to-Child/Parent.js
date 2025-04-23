import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  // var x = 100

 var [x, setX] = useState(100)

  return (
    <div>
      <h2>Parent: {x}</h2>
      <Child1 x = {x} />
      <Child2 x= {x} />
    </div>
  )
}

export default Parent