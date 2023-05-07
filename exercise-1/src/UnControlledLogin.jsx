import { useRef, useEffect } from "react";

function UnControlledLogin(){
    function handleLogin(event){
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        console.log({username, password})
    }
  
    return (
        <form onSubmit={handleLogin}> 
          <label>
            Username:
            <input type="text" name="username" autoFocus/>
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">
            Login
          </button>
        </form>
      );
}
export default UnControlledLogin;
