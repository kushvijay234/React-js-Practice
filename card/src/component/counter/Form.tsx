import React from 'react'
import { useState } from 'react'

const Form = () => {

    interface InitalState {
        name: string,
        email: string,
        password: string,
        mobile: number
    }

    const initalState: InitalState = {
        name: "",
        email: "",
        password: "",
        mobile: 0,
    }

    const [form, setForm] = useState(initalState);

    function onNameChange(e:any) {
        setForm({ ...form, name: e.target.value });
    }

    function onEmailChange(e:any) {
        setForm({ ...form, email: e.target.value });
    }

    function onPasswordChange(e:any) {
        setForm({ ...form, password: e.target.value });
    }

    function onMobileChange(e:any) {
        setForm({ ...form, mobile: e.target.value });
    }

    return (
        <>
            <input onClick={onNameChange} placeholder="Enter your name" />
            <br />
            <input onChange={onEmailChange} placeholder="Enter your Email" />
            <br />
            <input onChange={onPasswordChange} placeholder="Enter your Password" />
            <br />
            <input onChange={onMobileChange} placeholder="Enter your Mobile Number" />
        </>
    )
}
export default Form 