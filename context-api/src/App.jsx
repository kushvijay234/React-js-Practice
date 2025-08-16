import React from 'react'
import Child from './child'
import { createContext } from 'react'

export const postman = createContext();
const App = () => {

    const data = {
        name: "vijay",
        age: 22,
        city: "kanpur"
    }

  return (
    <postman.Provider value = {data}>
    <div>
      <Child />
    </div>
    </postman.Provider>
  )
}

export default App;
