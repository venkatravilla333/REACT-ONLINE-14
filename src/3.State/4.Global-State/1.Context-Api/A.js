import React, { useState } from 'react'
import B from './B'
import C from './C'

export let x = React.createContext(0)
export let nameCotext = React.createContext('sachin')
export let colorCotext = React.createContext('red')

 console.log(x)

function A() {

  let [count, setCount] = useState(1)
  let [name, setName] = useState('kolhi')
  let [color, setColor] = useState('green')


  let updateCount = () => {
    setCount(count+1)
  }
 
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={updateCount}>update count</button>
      <colorCotext.Provider value={color}>
      <nameCotext.Provider value={name}>
      <x.Provider value={count}>
      <B />
      <C />
      </x.Provider> 
      </nameCotext.Provider>
      </colorCotext.Provider>
    </div>
  )
}

export default A