import React from 'react'

function ListRendering() {
  var products = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'grape' },
    {id: 4, name: 'papaya'},
    {id: 5, name: 'papaya'}
  ]
  return (
    <div>
      <h2>Lists</h2>
      {
        products.map((product, index) => {
          return <div key={product.id}>
              <h3>Name: {product.name}</h3>
             </div>
        })
      }
    </div>
  )
}

export default ListRendering