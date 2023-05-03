export default function Age(props) {
  let age = props.age;
  return (
    <>
       {props.age && props.age > 18  ? (
        <p>Your age is {props.age}</p>
       ) : (
        <p>You are very young!!</p>
       )}
    </>
  );
}