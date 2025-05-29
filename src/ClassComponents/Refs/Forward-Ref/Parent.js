import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }

  handleClick = () => {
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <Child ref={this.inputRef}/>
        <button onClick={this.handleClick}>forward ref</button>
      </div>
    )
  }
}

export default Parent