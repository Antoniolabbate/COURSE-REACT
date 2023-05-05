import React from 'react';
import { useState } from 'react';
function ClickTracker(){
  const [lastClicked, setLastClicked] = useState('');
  function handleClick(e){
    //registra l'evento di click e l'ultimo pulsante premuto
    setLastClicked(e.target.name);
  }
  const style = {
    color: "green"
  }
  return(
    <div>
      <h1 style={style}>Ultimo pulsante premuto: {lastClicked}</h1>
       <button onClick={handleClick} name="button1">Primo pulsante</button>
      <button onClick={handleClick}name='button2'>Secondo pulsante</button>
      <button onClick={handleClick}name='button3'>Terzo pulsante</button>
    </div>
  );
  }
  export default ClickTracker;
