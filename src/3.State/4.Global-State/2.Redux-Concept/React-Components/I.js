import React from 'react'
import { store } from '../Redux/store'
import { useSelector } from 'react-redux'

function I() {
  // let value = store.getState()
  // console.log(value)

 let noOfCakes = useSelector((state) => {
    return state.noOfCakes
  })


  return (
    <div>I : No OF cakes: {noOfCakes}</div>
  )
}

export default I