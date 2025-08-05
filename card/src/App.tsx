import React from 'react'
import CounterApp from './component/counter/Counter'
import Form from './component/counter/Form'
import Prop from './component/prop/Prop'

const App = () => {


    return (
        <>
        <CounterApp />
        <br />
        <div> <Form /></div>
        <Prop />
        </>
    )
}

export default App