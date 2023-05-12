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

import React, { useState, useEffect } from "react";

const ClickCounter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onCounterChange(count);
  }, [count, props.onCounterChange]);

  const clickCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickCounter}>Click me</button>
    </div>
  );
};

export default ClickCounter;