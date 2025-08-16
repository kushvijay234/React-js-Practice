import React from 'react'
import { useState, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const ref = useRef(0);
  
  const ref2 = useRef();
  ref2.current.style.backgroundColor = "red";

  const handleIncrement = () => {
    setCount(count +1);
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  
  return (
    <>
      <div>
        <button ref={ref2} onClick={handleIncrement}>Count is {count}</button>
      
      </div>
    </>
  )
}

export default App;