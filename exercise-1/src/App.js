
import React from "react";
// import ClickCounter from "./ClickCounter";
import GithubUser from "./GithubUser";

function App() {
  // function handleCounterChange(count) {
  //   console.log(`Counter changed: ${count}`);
  // }

  return (
    <div>
      <GithubUser username="antonio"/>
      {/* <ClickCounter onCounterChange={handleCounterChange} /> */}
    </div>
  );
}
export default App;