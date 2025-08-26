import React, { useState, useEffect } from 'react';

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Functional Component: Effect called!");
    document.title = `Count: ${count}`;

    return () => {
      console.log("Functional Component: Cleanup function called!");
      document.title = "React App";
    };
  }, [count]); 

  return (
    <div style={{ padding: '15px', border: '1px solid gray', margin: '20px' }}>
      <h3>Functional Component with Hooks Example</h3>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default FunctionalCounter;