import React from "react";
import useGithubUser from "./useGitHubUser";



function GithubUser({ username }) {
  const {data} = useGithubUser(username)

  return(
    <>
      {data && data.login}
    </>
  )
  
    
  


}

export default GithubUser;