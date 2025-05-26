import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    console.log('Parent constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parent get derived')
    return null
  }

  componentDidMount() {
    console.log('Parent didMount')
  }
  render() {
    console.log('Parent redner')
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <Child/>
      </div>
    )
  }
}

export default Parent