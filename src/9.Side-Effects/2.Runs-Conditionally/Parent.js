import React, { useEffect, useState } from 'react'

function Parent() {
 var [normalCount, setNormalCount] = useState(0)
  var [domCount, setDomCount] = useState(0)
  
  let updateNormalCount = () => {
    setNormalCount(normalCount+1)
  }
  
  let updateDomCount = () => {
    setDomCount(domCount+1)
  }

  useEffect(() => {
    console.log('effect runs')
    document.title = domCount
  }, [domCount])

  console.log('render')

  return (
    <div>
      <h3>Normal Count: {normalCount}</h3>
      <button onClick={updateNormalCount}>Update Normal Count</button>
      <h3>Dom Count: {domCount}</h3>
      <button onClick={updateDomCount}>Update Dom Count</button>
    </div>
  )
}

export default Parent