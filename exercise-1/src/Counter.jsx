import {useState} from "react";

function Counter(props){
    let [count,setCount] = useState(0);
  
return (
  <>
  <h1>{count}</h1>
  <button onClick={add}>Increment</button>
  </>
)
function add(){
  setInterval(() =>
    setCount(count += props.incrementAmount),props.incrementIntervall
   
  )
  return setCount;
}

}
export default Counter;