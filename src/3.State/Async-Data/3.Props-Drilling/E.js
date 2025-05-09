import React from 'react'
import I from './I'

function E(props) {
  console.log(props.x)
  return (
    <div>
      <I x={props.x} updateX={props.updateX} />
    </div>
  )
}

export default E