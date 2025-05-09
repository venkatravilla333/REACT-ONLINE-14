import React, { useContext } from 'react'

import { postsContext } from './A';

function I() {
  var  state = useContext(postsContext)
  console.log(state)
  return (
      <div>
      <h2>Reducer</h2>
      {state.loading ? (
        <h3>Loading</h3>
      ) : state.error ? (
        <h3>{state?.error.message}</h3>
      ) : (
        state.posts?.map((post) => {
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