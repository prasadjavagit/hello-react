import { useState } from 'react';

const App3 = () => {
  let title = "Random title";
  const handleClick = () => {
    title = 'hello react';
    console.log(title);
  }
  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>change title</button>
    </>
  );
};
export default App3;
