import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  console.log(props.x)
  return (
    <div>
      <D />
      <E x={props.x} updateX={props.updateX} />
    </div>
  )
}

export default B