import React from "react"
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        const age = this.props.age;

        return (
            <>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                {(age > 18 && age < 65) && <Age age={age} />}
            </>
        )
    }
}
export default Welcome;


 
