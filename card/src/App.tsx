import React from 'react'
import CounterApp from './component/counter/counter'

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
        </>
    )
}

export default App