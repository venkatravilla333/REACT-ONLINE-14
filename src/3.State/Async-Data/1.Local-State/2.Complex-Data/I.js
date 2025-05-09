import React, { useEffect, useReducer} from 'react';

function I() {
  let initialState = {
    loading: false,
    posts: [],
    error: null,
  };

  let postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FECTH_POSTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
        break;
      case 'FECTH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
        break;
      case 'FECTH_POSTS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
        break;
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(postsReducer, initialState);

  console.log('render')

  useEffect(() => {
    console.log('effect calls');
    dispatch({ type: 'FECTH_POSTS_REQUEST' });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'FECTH_POSTS_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FECTH_POSTS_FAILURE', payload: error });
      });
  }, []);

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
            <div key={post.id} style={{ border: '2px solid', margin: '8px' }}>
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
