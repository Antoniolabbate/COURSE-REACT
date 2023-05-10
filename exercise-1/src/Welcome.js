import React from 'react'
import Age from './Age'

class Welcome extends React.Component {
    render() {
        const { name, age } = this.props;

        return (
            <>
                <p>Welcome, <strong>{name}</strong>!</p>
                {name === "John" && age > 18 && age < 65 && <Age age={age} />}
            </>
        )
    }
}


 
export default Welcome;