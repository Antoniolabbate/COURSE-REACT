import Age from "./Age";

export default function Welcome(props){
    if(props.age){ 
    return(
        <>
        <h1>Hello World!</h1>
        <p>Welcome, {props.name}!</p>
        <p>Your age is {props.age}</p>
        </>
    );
    }else{
        <> 
        <h1>Hello World!</h1>
        <p>Welcome, {props.name}!</p>
        </> 
    }
}

 
