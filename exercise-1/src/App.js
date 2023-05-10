import Counter from "./Counter";
import React from "react";


class App extends React.Component{

  render(){
   
   return (
    <>
    <Counter incrementAmount = {1} incrementIntervall = {1000}/>
    </>
   
   )
  }
 
}
export default App;