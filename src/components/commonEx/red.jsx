import React, { useReducer } from 'react';

// Define the initial state and the reducer function
const initialState = { count: 0, name: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setName':
      return { ...state, name: action.payload }; // Updating just the 'name'
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  // Use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <p>Name: {state.name}</p>
      <button onClick={() => dispatch({ type: 'setName', payload: 'Alice' })}>
        Set Name to Alice
      </button>
    </div>
  );
}

export default Counter;
