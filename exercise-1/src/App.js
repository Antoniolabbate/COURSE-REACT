// import GithubUserList from "./GithubUserList";
import React from "react";
import LoginForm from "./LoginForm";
import GithubUser from "./GithubUser";
// import Counter from "./Counter";
// import ClickCounter from "./ClickCounter";


function App() {
  // function handleCounterChange(count) {
  //   console.log(`Counter changed: ${count}`);
  // }

  return (
    <div>
      <LoginForm/>
      {/* <Counter/> */}
      <GithubUser/>
      {/* <ClickCounter onCounterChange={handleCounterChange} /> */}
    </div>
  );
}
export default App;