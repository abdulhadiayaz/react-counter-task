import React, { useState } from 'react';
import '../assets/scss/counter.scss';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="button-container">
        <button onClick={decrement} className="decrement-button">Decrement</button>
        <button onClick={reset} className="reset-button">Reset</button>
        <button onClick={increment} className="increment-button">Increment</button>
      </div>
    </div>
  );
}

export default Counter;
