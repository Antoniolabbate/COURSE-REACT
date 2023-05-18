import React, { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      setUsernames([...usernames, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a username"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
};

export default GithubUserList;