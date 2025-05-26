import React from 'react'

function Child(props) {
  if (props.age <= 18) {
      throw new Error('Age must be >=18')
    }
  return (
    <div>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

export default Child