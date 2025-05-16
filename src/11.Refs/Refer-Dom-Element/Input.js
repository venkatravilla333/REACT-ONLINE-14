import React, { useEffect, useRef, useState } from 'react'

function Input() {
  var [value, setValue] = useState()
  console.log('render')

  var inputRef = useRef()
  console.log(inputRef)

  useEffect(() => {
    inputRef.current.focus()
  })

  let getValue = () => {
    //  alert(inputRef.current.value)
    setValue(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <h3>Value : {value}</h3>
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Input