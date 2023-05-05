import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
