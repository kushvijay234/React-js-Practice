import React from 'react'
import { useState } from 'react'

type AddBtnProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

const AddBtn: React.FC<AddBtnProps> = ({ count, setCount }) => {
    const increaseValue = () => {
        setCount(count + 1);
    }
    return (
        <>
            <button onClick={increaseValue}> Increase</button>
        </>
    )
}

const DelBtn: React.FC<AddBtnProps> = ({ count, setCount }) => {
    const decreaseValue = () => {
        if (count > 0) {
            setCount(count - 1);
        } else  {
            alert("Value is 0");
        }
    }
    return (
        <>
            <button onClick={decreaseValue}> Decrease</button>
        </>
    )
}

const Prop = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        {/*prop used for passing data from a parent component to a child component. */}
            <AddBtn count={count} setCount={setCount} />
            <p> Value {count} </p>
            <DelBtn count={count} setCount={setCount} />
        </>
    )
}

export default Prop;