import React, { useState } from 'react';

function App1() {
  const [emotion, setEmotion] = useState('happy');
  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
    </>
  );
}
export default App1;
