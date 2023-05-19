import React from "react";
import CarDetails from './CarDetails'

const App = () => {
  const  initialData = {
    model: 'Tesla',
    year: '2022',
    color: 'Red',
  };
  return(
    <div>
      <h1>Car Details</h1>
      <CarDetails initialData={initialData}/>
    </div>
  )
}

export default App;