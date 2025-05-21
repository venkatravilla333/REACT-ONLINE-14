import React, { useRef } from 'react'

function Uncontrolled() {
  var inputRef = useRef()
  
  let getValue = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <form>
        <input type="text" ref={inputRef} />
        <button onClick={getValue}>get value</button>
      </form>
    </div>
  )
}

export default Uncontrolled