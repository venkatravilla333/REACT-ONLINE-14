import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../toolkit/slices/cakeSlice'
import { buyCurd } from '../toolkit/slices/curdSlice'

function I() {

 let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
 })
 let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
 })

  console.log(noOfCurds)
  
 let dispatch = useDispatch()
  return (
    <div>
      <h3>I: noOfCakes:  {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
      <h3>I: noOfCurds:  {noOfCurds}</h3>
      <button onClick={()=>dispatch(buyCurd())}>Buy cake</button>
    </div>
  )
}

export default I