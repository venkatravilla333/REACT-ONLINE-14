import React, { useEffect } from 'react'
// import {store } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/curdAction'
import { fetchPosts } from '../Redux/posts/postsActionCreators'

function I() {
  // let value = store.getState()
  // console.log(value)

 let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
  })
 let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
  })
 let state = useSelector((state) => {
    return state.posts
  })

  var dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])


  return (
    <div>
      <h3>I : No OF cakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
      <h3>I : No OF curds: {noOfCurds}</h3>
      <button onClick={() => dispatch(buyCurd())}>Buy curd</button>
      {
        state.loading ? <h3>Loading</h3> : state.error ? <h3>{state.error}</h3> :
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