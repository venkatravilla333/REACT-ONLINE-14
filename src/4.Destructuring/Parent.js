import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  // var [count] = useState({ value: 10 })
  var [count] = useState({value: 10})
  
  let {value} = count
  return (
    <div>
      {/* <h3>Parent : {count.value}</h3> */}
      <h3>Parent : {value}</h3>
      <h3>Parent : {value}</h3>
      <h3>Parent : {value}</h3>
      <h3>Parent : {value}</h3>
   
      <Child count={value} />
    </div>
  )
}

export default Parent