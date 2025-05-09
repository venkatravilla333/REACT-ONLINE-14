import React from 'react'
import { useSelector } from 'react-redux'

function H() {

  let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
  })
  return (
    <h3>H: curds : {noOfCurds }</h3>
  )
}

export default H