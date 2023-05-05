import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, props.interval);

    return () => clearInterval(intervalId);
  }, [props.interval]);

  return <h1>{count}</h1>;
}

export default Counter;