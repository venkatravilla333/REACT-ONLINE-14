import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

 var [x, setX] = useState()

  function getData(data) {
    console.log(data)
    setX(data)
  }


  return (
    <div>
      <h3>Parent : {x}</h3>
      <Child1 getData = {getData} />
      <Child2 x = {x} />
    </div>
  )
}

export default Parent