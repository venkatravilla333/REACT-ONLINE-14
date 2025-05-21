import React, { useState } from 'react'

function Controlled() {
  var [data, setData] = useState('')
  console.log(data)

  let handleSubmit = (e) => {
    console.log('hanlde submit')
    e.preventDefault()
    // api (data)
    console.log(data)
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
        <h2>{data}</h2>
    </div>
  )
}

export default Controlled