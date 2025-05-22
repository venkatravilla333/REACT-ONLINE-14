import React from "react"

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'sachin'
    }
  }
  render() {
    return (
      <div>
        <h2>This is class Component : {this.state.name}</h2>
     </div>)
   }
}

export default Parent