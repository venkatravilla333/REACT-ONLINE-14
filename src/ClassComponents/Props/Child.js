import React, { Component } from 'react'

class Child extends Component {
  render() {
    console.log(this)
    return (
      <div>Child :{this.props.name}</div>
    )
  }
}

export default Child