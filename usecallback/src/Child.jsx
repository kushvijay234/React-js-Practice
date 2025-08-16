import React, {memo} from 'react'

const Child = (props) => {

    console.log("Child Component rendered.....");
  return (
    
    <div>
      child calling.........{props.count1}
    </div>
  )
}

export default Child;
