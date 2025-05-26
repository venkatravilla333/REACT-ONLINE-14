import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.updateCount = this.updateCount.bind(this)
    console.log('Parent constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parent get derived')
    return null
  }

  shouldComponentUpdate(props, state) {
    console.log('parent shouldupdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('parent snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('parent did update')
  }

  componentDidMount() {
    console.log('Parent didMount')
  }

  updateCount (){
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    console.log('Parent redner')
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.updateCount}>update count</button>
        <Child/>
      </div>
    )
  }
}

export default Parent