export default function Age(props) {
  let age = props.age;
  return (
    <>
      <p>Your age is {age && age > 18 && age < 65 ? age : "less than 18 or greater than 65"}!</p>
    </>
  );
}