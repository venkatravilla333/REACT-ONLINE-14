import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      normalValue: 0,
      domValue: 0
    }
  }

  componentDidMount() {
    console.log('did mount')
    document.title = this.state.domValue
  }
  
  componentDidUpdate(preProps, preState) {
    if (preState.domValue !== this.state.domValue) {
      console.log('did update')
      document.title = this.state.domValue
    }
  }

  updateNormalValue = () => {
    this.setState({
      normalValue: this.state.normalValue+1
    })
  }
  updateDomValue = () => {
    this.setState({
      domValue: this.state.domValue+1
    })
  }

  render() {
    console.log('Render')
    return (
      <div>
        <h2>Normal value: {this.state.normalValue}</h2>
        <button onClick={this.updateNormalValue}>update normal value</button>
        <h2>Dom value: {this.state.domValue}</h2>
        <button onClick={this.updateDomValue}>update dom value</button>
      </div>
    )
  }
}

export default Parent