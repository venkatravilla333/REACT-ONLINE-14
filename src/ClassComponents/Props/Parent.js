import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'sachin'
    }
  }
  render() {
    console.log(this)
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <Child name={this.state.name} />
        
      </div>
    )
  }
}

export default Parent