
import React from "react"


export var Hoc = (OriginalComponent) => {
  class NewComponent extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
    }

    changeCount = () => {
      console.log('change count')
      this.setState({
        count: this.state.count+1
      })
    }
    render() {
      return <OriginalComponent count={this.state.count} changeCount={this.changeCount } />
    }
  }
  return NewComponent
}

export default Hoc