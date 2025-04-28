import React from 'react'
// import {store } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/curdAction'

function I() {
  // let value = store.getState()
  // console.log(value)

 let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
  })
 let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
  })

  var dispatch = useDispatch()


  return (
    <div>
      <h3>I : No OF cakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
      <h3>I : No OF curds: {noOfCurds}</h3>
      <button onClick={()=>dispatch(buyCurd())}>Buy cake</button>
    </div>
  )
}

export default I