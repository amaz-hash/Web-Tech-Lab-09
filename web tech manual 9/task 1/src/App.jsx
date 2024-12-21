import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0); 
  };
  return (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={reset}>reset</button>
    </div>
    );
  }
  export default Counter;