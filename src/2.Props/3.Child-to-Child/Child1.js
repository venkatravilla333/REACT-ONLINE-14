import React from 'react'

function Child1(props) {
  console.log(props)

  return (
    <div>
      <h3>Child1: </h3>
      <button onClick={()=>props.getData('sachin')}>Send data from child1 to parent</button>
    </div>
  )
}



export default Child1