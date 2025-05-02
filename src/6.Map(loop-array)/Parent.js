import React, { useState } from 'react';

function Parent() {
  let [data] = useState([
    {id: 1, name: 'lenova', price: 30000 },
    { id: 2, name: 'dell', price: 40000 },
    {id: 3,  name: 'apple', price: 50000 },
    {id: 4, name: 'hp', price: 20000 },
    {id: 5, name: 'dell', price: 10000 },
  ]);
  console.log(data);
  return (
    <div>
      {/* <h4>{data[0].name}</h4>
      <h4>{data[0].price}</h4>
      <h4>{data[1].name}</h4>
      <h4>{data[1].price}</h4>
      <h4>{data[2].name}</h4>
      <h4>{data[2].price}</h4>
      <h4>{data[3].name}</h4>
      <h4>{data[3].price}</h4> */}
      {data.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Parent;
