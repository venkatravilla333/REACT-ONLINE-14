import React from 'react'
import F from './F'
import G from './G'

function C(props) {
  console.log(props.x)
  return (
    <div>
      <F x={props.x} updateX={props.updateX} />
      <G />
    </div>
  )
}

export default C