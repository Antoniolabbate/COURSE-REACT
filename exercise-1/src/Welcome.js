

function Welcome(props){
    return(
        <>
        <h1>Hello World!</h1>
        <p>Welcome, {props.name}!</p>
        </>
    );
}
Welcome.defaultProps = {
    name: "Giuseppe"
}

export default Welcome;