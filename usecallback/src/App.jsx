import React, { useState, useCallback } from 'react'
import { Child } from './Child'

const App = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  }

  const Increment1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Inc</button>

      <br />
      <br />
      <h1>{count1}</h1>
      <button onClick={Increment1}>Inc</button>
    
      <Child count1={count1} Increment1={Increment1} />
    </div>
  )
}

export default App