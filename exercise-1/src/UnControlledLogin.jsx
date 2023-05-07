import { useRef, useEffect } from "react";

function UnControlledLogin(){
    function handleLogin(event){
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        console.log({username, password})
    }
    function focus(){
      const focusUsername = useRef(null)
      useEffect(()=>{
        focusUsername.current.focus()
      },[]);
    }
    return (
        <form onSubmit={handleLogin}> 
          <label>
            Username:
            <input type="text" name="username" ref={focusUsername}/>
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
