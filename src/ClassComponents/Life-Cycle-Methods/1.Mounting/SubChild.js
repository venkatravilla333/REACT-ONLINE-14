import React, { Component } from 'react'

export class SubChild extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    console.log('Sub child constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Sub child get derived')
    return null
  }

  componentDidMount() {
    console.log('Sub child didMount')
  }
  render() {
    console.log('Sub child render')
    return (
      <div>SubChild</div>
    )
  }
}

export default SubChild