

// function Child(data) {
//   var x = 100
//   return <h1>Functional Component {x}, {data}</h1>
// }

// export default Child


//ES-6
import React from "react"

class Child extends React.Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
    
  }
  render() {
    return <h2>Class com : {this.state.count}, Name: {this.props.name}</h2>
   }
}


export default Child


