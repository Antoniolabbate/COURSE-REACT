import React from "react";
import useCounter from "./UseCounter";

function Counter() {
    const {count, increment, decrement, reset} = useCounter(0);
    
    return(
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter;


