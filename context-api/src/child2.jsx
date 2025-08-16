import React from 'react'
import { useContext } from 'react'
import { postman } from './App'

const child2 = () => {

    const data = useContext(postman);
    console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age}</p> 
      <p>{data.city}</p>
    </div>
  )
}

export default child2
