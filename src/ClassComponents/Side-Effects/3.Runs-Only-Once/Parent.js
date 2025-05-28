import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      X: 0,
      Y: 0
    }
  }

  updateState = (e) => {
    console.log('update state')
    this.setState({
      X: e.clientX,
      Y: e.clientY
    })
  }

  componentDidMount() {
    console.log('did mount')
    window.addEventListener('mousemove', this.updateState)
  }
 
  render() {
    console.log('render')
    return (
      <div>
        <h2>X: {this.state.X} </h2>
        <h2>Y: {this.state.Y}</h2>
      </div>
    )
  }
}

export default Parent