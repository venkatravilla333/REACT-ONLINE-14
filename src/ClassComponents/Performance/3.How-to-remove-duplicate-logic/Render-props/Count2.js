import React, { Component } from 'react'
import Hoc from './Hoc'

class Count2 extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //   count: 0
    // }
  // }

  // updateCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  }
  render() {
    // let {count} = this.state
    return (
      <div>
        <h2>Count2: {this.props.count}</h2>
        <button onMouseMove={this.props.changeCount}>update count2</button>
      </div>
    )
  }
}

export default Hoc(Count2)