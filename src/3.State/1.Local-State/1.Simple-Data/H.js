import React, { useState } from 'react'
import axios from 'axios'

function H() {
  // let [count, setCount] = useState(0)

  let [loading, setLoding] = useState(false)
  let [posts, setPosts] = useState([])
  let [error, setError] = useState(null)
 
  // let updateCount = () => {
  //   console.log('update')
  //   setCount(count+1)
  // }

  let getPosts = () => {
    setLoding(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
       setLoding(false)
       setPosts(res.data)
      }).catch((error) => {
        setLoding(false)
        setError(error.message)
    })
  }
 
  console.log('render')
  return (
    <div>
      {/* <h2>H : Count: {count}</h2>
      <button onClick={updateCount}>update count</button> */}
     <button onClick={getPosts}>get posts</button>
      {
        loading ? <h2>Loding</h2> : error ? <h2>{error}</h2> :
          posts.map((post) => {
            return <div>
              <h3>Userid: {post.userId}</h3>
              <h3>Body: {post.body}</h3>
              <h3>Title: {post.title}</h3>
            </div>
          })
      }
    </div>
  )
}

export default H