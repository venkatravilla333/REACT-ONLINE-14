
import React from 'react'
import Child from './Child'

function Parent() {


  //state

  // var x = [100] //stores data in memory

  // var changeX = (data) => {
  //   x = data 
  //   console.log(x)
  // }
console.log('render')
  //API
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      //  console.log(res)
    return  res.json()
    }).then((data) => {
      console.log(data)
      changeX([1,2,3])
    })
  
  return (
    <div>
      <h2>X: {x}</h2>
      <button onClick={changeX}>update x</button>
      <Child/>
    </div>
  )
}

export default Parent