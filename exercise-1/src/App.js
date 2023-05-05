import { useEffect, useState } from "react";

function CounterDisplay(props) {
  return <h1>{props.count}</h1>;
}

function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + props.incrementAmount);
    }, props.incrementInterval);
    return () => clearInterval(intervalId);
  }, [props]);

  return (
    <div>
      <CounterDisplay count={count} />
    </div>
  );
}

export default Counter;