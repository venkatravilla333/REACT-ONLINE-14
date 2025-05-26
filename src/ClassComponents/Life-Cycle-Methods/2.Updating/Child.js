import React, { Component } from 'react'
import SubChild from './SubChild'

export class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
    console.log('child constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Child get derived')
    return null
  }

  shouldComponentUpdate(props, state) {
    console.log('child shouldupdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('child snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('child did update')
  }

  componentDidMount() {
    console.log('Child didMount')
  }
  render() {
    console.log('Child render')
    return (
      <div>
        <SubChild/>
      </div>
    )
  }
}

export default Child