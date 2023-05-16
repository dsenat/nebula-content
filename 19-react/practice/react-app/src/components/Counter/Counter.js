import React, { useState } from 'react';
import DisplayCounter from '../DisplayCounter/DisplayCounter'

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <DisplayCounter count = {count} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}