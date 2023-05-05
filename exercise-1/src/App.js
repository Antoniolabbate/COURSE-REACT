import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + props.increment);
    },props.interval);
    return () => clearInterval(intervalId);
  }, [props]);

  return <h1>{count}</h1>;
}

export default Counter;
