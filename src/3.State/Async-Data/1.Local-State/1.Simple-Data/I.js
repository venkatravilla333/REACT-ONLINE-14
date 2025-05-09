import React, { useEffect, useState } from 'react';

function I() {
  let [loading, setLoading] = useState(false);
  let [posts, setPosts] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    console.log('effect calls')
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      return res.json()
      }).then((data) => {
        // console.log(data)
        setLoading(false)
        setPosts(data)
      }).catch((error) => {
        setLoading(false)
        setError(error)
    })
  }, [])

  // let getData = () => {
  //   setLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setLoading(false);
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError(error);
  //     });
  // };

  console.log('render');
  return (
    <div>
      <h3>Posts</h3>
      {/* <button onClick={getData}>get data</button> */}
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        posts.map((post) => {
          return (
            <div key = {post.id} style={{ border: '2px solid', margin: '8px' }}>
              <h4>title :{post.title}</h4>
              <h4>body :{post.body}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default I;
