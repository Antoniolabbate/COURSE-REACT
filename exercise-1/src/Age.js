
export default function Age(props) {
    return (
      <>
        <p>Your age is {props.age ? (props.age < 18 ? "less than 18" : props.age) : null}!</p>
      </>
    );
  }