import React, { Component } from 'react'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    // this.state.count = this.state.count+1
    this.setState({
      count: this.state.count+1
    })
    console.log(this.state.count)
  }
  render() {
    var {count} = this.state
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.updateCount}>update count</button>
      </div>
    )
  }
}

export default Parent