import React, { Component } from 'react'
import B from './B'
import C from './C'

export var nameContext = React.createContext('sachin')
export var ageContext = React.createContext(40)
export var cityContext = React.createContext('mumbai')

export class A extends Component {
  render() {
    return (
      <div>
        <B />
        <C />
      </div>
    )
  }
}

export default A