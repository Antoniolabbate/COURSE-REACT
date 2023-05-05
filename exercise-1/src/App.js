import {useState} from 'react';
export default function App(){
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(count => count + 1);
  };
  return(
    <>
    <h1>{counter}</h1>
    <button onClick={increase}>Increase</button>
    
    </>
  )
}