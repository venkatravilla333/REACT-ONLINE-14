import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {

  var [products] = useState([{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }, { id: 3, name: 'Grape' }, {id: 4, name: 'Papaya'}])
  
  
  return (
    <div className='products-div'>
      {
        products.map((product) => {
          return <Link state={product} to={`/products/${product.id}`}>{product.name}</Link>
        })
      }
      <Outlet/>
    </div>
  )
}

export default Products