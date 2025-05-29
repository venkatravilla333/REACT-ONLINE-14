import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef = React.createRef()
  }

  getFocus = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
  }
  render() {
    return (
      <div>
        <Child ref={this.componentRef} />
        <button onClick={this.getFocus}>get focus on child</button>
      </div>
    )
  }
}

export default Parent