import React from "react";
import { useEffect, useState } from "react";


function GithubUser({username}){
    const [user, setUser] = useState("");

    useEffect(() =>{
        async function fetchData(){
            try {
                const response = await fetch(  `https://api.github.com/users/${username}`)
                const data = await response.json()
                setUser(data);
                
            } catch (error) {
                console.log(error);
                setUser(null)
                
            }
        }
        fetchData()
    },[])
    return(
        <div>
            <h2>{user.login ? user.login : 'username error'}</h2>
            <h3>
                {user.id ? user.id : 'id error'}, {user.name ? user.name : 'username missing'}
            </h3>
        </div>
    )
}
export default GithubUser