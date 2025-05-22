import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
    // this.updateCount  = this.updateCount.bind(this)
  }

  updateCount = ()=> {
    console.log(this)
  }

  render() {
    var {count} = this.state
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={this.updateCount}>updateCount</button>
      </div>
    )
  }
}

export default Parent