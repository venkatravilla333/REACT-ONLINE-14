import React, { Component } from 'react'
import Hoc from './Hoc'

class Count1 extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    count: 0
    // }
  }

  // updateCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  render() {
    // let {count} = this.state
    console.log(this.props)
    return (
      <div>
        <h2>Count1: {this.props.count}</h2>
        <button onClick={this.props.changeCount}>update count1</button>
      </div>
    )
  }
}

export default Hoc(Count1)