
export default function Age(props){
    if(props.age > 18){ 
    return(
        <>
        <p>Your age is,{props.age}!</p>
        </>
    );
    }
}
