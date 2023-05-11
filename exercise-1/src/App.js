import React, { useState } from "react";
function App (){
  const [count, setCount] = useState(0);
  
  const clickCounter = () => {
    return setCount((count) => count +1)
    

  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={clickCounter}></button>

    </div>

  )

}
 export default App;



