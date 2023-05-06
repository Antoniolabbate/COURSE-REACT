import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    checkInputs()
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    checkInputs()
  }

  function checkInputs() {
    setIsSubmitDisabled(username === "" || password === "");
  }

  function handleLogin(event) {
    event.preventDefault();
    onLogin({ username, password });
  }

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit" disabled={isSubmitDisabled} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}
export default Login;
