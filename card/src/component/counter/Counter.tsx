import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const increaseValue = () => {
        setCount(count +1);
    }

    const decraseValue = () => {
        setCount(count - 1);
    }

    return (
        <>
        <h1 id='counterNumber'>{count}</h1>
        <button onClick={increaseValue}>Increase the Value by 1</button>
        <button onClick={decraseValue}> Decrease the Value by 1</button>
        </>
    )
}

export default Counter 