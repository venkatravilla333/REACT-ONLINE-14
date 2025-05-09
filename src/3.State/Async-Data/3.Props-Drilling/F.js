import React from 'react'
import H from './H'

function F(props) {
  console.log(props.x)
  return (
    <div>
      <H x={props.x} updateX = {props.updateX} />
    </div>
  )
}

export default F