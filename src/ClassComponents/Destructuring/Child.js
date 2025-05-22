import React, { Component } from 'react'

class Child extends Component {
  render() {
    console.log(this.props)
    var {count} = this.props
    return (
      <div>
        {/* <h3>Count: {this.props.count}</h3>
        <h3>Count: {this.props.count}</h3>
        <h3>Count: {this.props.count}</h3>
        <h3>Count: {this.props.count}</h3> */}
        <h3>Count: {count}</h3>
        <h3>Count: {count}</h3>
        <h3>Count: {count}</h3>
        <h3>Count: {count}</h3>
        <h3>Count: {count}</h3>
      </div>
    )
  }
}

export default Child