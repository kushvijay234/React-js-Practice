import React from 'react'
import CounterApp from './component/counter/counter'
import Form from './component/counter/form'

const App = () => {

   /*  
    interface User {
        userName : string;
        age: number;
        displayName(): any;
    }

    const user: User = {
        userName : "Vijay",
        age : 23,
        displayName: function () {
            console.log(this.userName, this.age)
        }
    } */


    return (
        <>
        <CounterApp />
        <br />
        <div> <Form /></div>
        
        </>
    )
}

export default App