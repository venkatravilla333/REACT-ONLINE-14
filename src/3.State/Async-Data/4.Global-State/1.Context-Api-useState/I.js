import React, { useContext} from 'react'
import {postsContext} from './A'

function I() {

 let state = useContext(postsContext)
  return (
    <div>
      <h3>Posts</h3>
      {/* <button onClick={getData}>get data</button> */}
      {state.loading ? (
        <h2>Loading</h2>
      ) : state.error ? (
        <h3>{state.error.message}</h3>
      ) : (
        state.posts.map((post) => {
          return (
            <div key = {post.id} style={{ border: '2px solid', margin: '8px' }}>
              <h4>title :{post.title}</h4>
              <h4>body :{post.body}</h4>
            </div>
          );
        })
      )}
    </div>
  )
}

export default I