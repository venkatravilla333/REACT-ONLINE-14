import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    // this.cbRef = null
    // this.RefFun = (element) => {
    //   this.cbRef = element
    // }
  }

  componentDidMount() {
    // if (this.cbRef) {
    //   this.cbRef.focus()
    // }
    // console.log(this.inputRef)
    this.inputRef.current.focus()
  }

  getValue = () => {
   console.log(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        {/* <input type='text' ref={this.RefFun} /> */}
        <button onClick={this.getValue}>get value</button>
      </div>
    )
  }
}

export default Parent