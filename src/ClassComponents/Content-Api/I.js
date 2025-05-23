// import React, { Component } from 'react'
import {nameContext, ageContext, cityContext} from './A'

// export class I extends Component {
//   render() {
//     return <nameContext.Consumer>
//       {
//         (name) => {
//           return <ageContext.Consumer>
//             {
//               (age) => {
//                 return <cityContext.Consumer>
//                   {
//                     (city) => {
//                       return <div>
//                         <h3>Name: {name}</h3>
//                         <h3>Age: {age}</h3>
//                         <h3>City: {city}</h3>
//                       </div>
//                     }
//                   }
//                 </cityContext.Consumer>
//               }
//             }
//           </ageContext.Consumer>
//         }
//       }
//     </nameContext.Consumer>
//   }
// }

// export default I


import React, { useContext } from 'react'

function I() {
 var name =  useContext(nameContext)
 var age =  useContext(ageContext)
 var city =  useContext(cityContext)
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
    </div>
  )
}

export default I

