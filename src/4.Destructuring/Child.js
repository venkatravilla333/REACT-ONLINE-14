import React from 'react'

function Child(props) {
  console.log(props)
  let {count} = props
  return (
    <div>Child :
    {/* <h3> {props.count}</h3> */}
    <h3> {count}</h3>
    <h3> {count}</h3>
    <h3> {count}</h3>
    <h3> {count}</h3>
    <h3> {count}</h3>
    </div>
  )
}

export default Child