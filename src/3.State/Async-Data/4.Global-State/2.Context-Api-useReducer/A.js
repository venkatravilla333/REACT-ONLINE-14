import React, { useEffect, useReducer} from 'react';
import B from './B';
import C from './C';

export let postsContext = React.createContext()

function A() {

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
      <postsContext.Provider value={state}>
        <B />
        <C />
     </postsContext.Provider>
    </div>
  );
}

export default A;
