import { useState } from "react";

function CounterDisplay(props) {
  return <h1>{props.count}</h1>;
}

function Counter(props) {
  const [count, setCount] = useState(0);

  function add() {
    setInterval(() => setCount(count + props.incrementAmount), props.incrementInterval);
  }

  return (
    <>
      <CounterDisplay count={count} />
      <button onClick={add}>Increment</button>
    </>
  );
}

export default Counter;