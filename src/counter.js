import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
};
export default Counter;
