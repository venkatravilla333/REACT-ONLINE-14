import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  render() {
    // var {count} = this.state
    return (
      <div>
        {/* <h2>Count: {this.state.count} </h2>
        <h2>Count: {this.state.count} </h2>
        <h2>Count: {this.state.count} </h2>
        <h2>Count: {this.state.count} </h2> */}
        {/* <h2>Count: {count}</h2>
        <h2>Count: {count}</h2>
        <h2>Count: {count}</h2> */}
        {/* <h2>Count: {count}</h2> */}
        <Child count = {this.state.count} />
      </div>
    )
  }
}

export default Parent