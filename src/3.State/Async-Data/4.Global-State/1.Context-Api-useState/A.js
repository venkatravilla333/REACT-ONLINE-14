import React, { useState, useEffect } from 'react';
import B from './B';
import C from './C';

export let postsContext = React.createContext();

function A() {
  
  let [loading, setLoading] = useState(false);
  let [posts, setPosts] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    console.log('effect calls');
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setLoading(false);
        setPosts(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <div>
      <postsContext.Provider  value={{loading, posts, error}}>
        <B />
        <C />
      </postsContext.Provider>
    </div>
  );
}

export default A;
