import React, { Component } from 'react'
import Parent from './Parent'

class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       display: true
    }
  }
  render() {
    return (
      <div>

        <button onClick={()=>this.setState({display: false})}>Toggle</button>
        {this.state.display && <Parent/>}
      </div>
    )
  }
}

export default Container