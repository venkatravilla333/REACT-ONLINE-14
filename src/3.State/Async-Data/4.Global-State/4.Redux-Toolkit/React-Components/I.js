import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../toolkit/slices/cakeSlice'
import { buyCurd } from '../toolkit/slices/curdSlice'
import { fetchPosts } from '../toolkit/slices/postsSlice'

function I() {

 let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
 })
 let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
 })
 let state = useSelector((state) => {
    return state.posts
 })

  console.log(noOfCurds)
  
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return (
    <div>
      <h3>I: noOfCakes:  {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
      <h3>I: noOfCurds:  {noOfCurds}</h3>
      <button onClick={() => dispatch(buyCurd())}>Buy cake</button>
      <h3>Api call</h3>
      {
        state.loading ? <h2>Loading</h2> : state.error ? <h3>{state.error}</h3> : 
          state.posts.map((post) => {
            return (
              <div key = {post.id} style={{ border: '2px solid', margin: '8px' }}>
                <h4>title :{post.title}</h4>
                <h4>body :{post.body}</h4>
              </div>
            );
         })
      }
    </div>
  )
}

export default I