import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/curdAction'

class I extends Component {
  render() {
    return (
      <div>
        <h3>Cakes: {this.props.noOfCakes }</h3>
        <button onClick={this.props.buyCake}>buy cake</button>
        <h3>Curds: {this.props.noOfCurds}</h3>
        <button onClick={this.props.buyCurd}>buy curd</button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfCurds: state.curd.noOfCurds
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => { dispatch(buyCake()) },
    buyCurd: () => { dispatch(buyCurd()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (I)