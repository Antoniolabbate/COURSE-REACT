


import React from 'react';
import ClickCounter from './ClickCounter';

function App() {
  function handleCounterChange(count) {
    console.log(`Counter changed: ${count}`);
  }

  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}
export default App;