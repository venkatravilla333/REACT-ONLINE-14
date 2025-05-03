import React from 'react'

let obj = {color: 'red', fontSize: '40px'}

function Inline() {
  return (
    <div>
      <h2 style = {obj}>One</h2>
      <h2 style={{color:'blue'}}>Two</h2>
    </div>
  )
}

export default Inline