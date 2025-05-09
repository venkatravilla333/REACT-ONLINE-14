import React, { useReducer, useState } from 'react';
import B from './B';
import C from './C';

export let countContext = React.createContext();

function A() {
  
  let initialState = { count: 0 };

  let countReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE':
        return {
          count: state.count + 1,
        };
        break;
      case 'DECREASE':
        return {
          count: state.count - 1,
        };
        break;
      case 'RESET':
        return {
          count: (state.count = 0),
        };
        break;
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <countContext.Provider value={{ state , dispatch}}>
        <B />
        <C />
      </countContext.Provider>
    </div>
  );
}

export default A;
