// import {useState, useEffect} from 'react';


// export default function App({onCounterChange}){

//   const [counter, setCounter] = useState(0);
//   const increase = () => {
//     setCounter(count => count + 1);
  
  
//   };

//   useEffect(() => {
//     onCounterChange(counter);
//   },[counter, onCounterChange])
   
 



  
//   return(
//     <>
    
//     <h1> Hai cliccato{counter} volte</h1>
//     <button onClick={increase}>Increase</button>
    
//     </>
//   )
// }

import React, { useState, useEffect } from 'react';

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
export default ClickCounter;