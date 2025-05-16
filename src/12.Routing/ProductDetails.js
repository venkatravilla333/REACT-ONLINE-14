import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDetails() {
  var { id } = useParams()
  var location = useLocation()
  console.log(location)
  return (
    <div className='details-div'>
      <h2>Product details</h2>
      <h3>Id: {id} </h3>
      <h3>Name: </h3>
      <h3>Price: </h3>
      <div>{JSON.stringify(location.state.name) }</div>
    </div>
  )
}

export default ProductDetails