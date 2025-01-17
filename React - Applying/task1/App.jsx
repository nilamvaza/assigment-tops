
// -----------------TASK 1 -------------------------------


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Actions';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ marginRight: '10px', padding: '10px' }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ padding: '10px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
