import React, { useState } from 'react'
import './style.css'

function Parent() {

  let [styleClass, setStyleClass] = useState(false)

  let classname = styleClass ? 'success' : 'error'
  
  return (
    <div>
      <button onClick={()=>setStyleClass(!styleClass)}>apply css</button>
        <h2 className={classname}>Hello</h2>
    </div>
  )
}

export default Parent