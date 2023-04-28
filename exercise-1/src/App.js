import Welcome from './Welcome';
import Age from './Age';

export default function App() { 
  if(Age){return (
    <>
    <Welcome name ="Antonio"/>
    <Age age={20}/>
    </>
  )}else{
    <>
    <Welcome name ="Antonio"/>
    </>
  }
}

