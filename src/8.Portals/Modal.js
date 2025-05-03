import React from 'react'

import ReactDOM from 'react-dom'

import './style.css'

function Modal(props) {
  return (
    ReactDOM.createPortal(<div className='modal-overlay'>
      <div className='modal-text'>
        <h4>Modal Header</h4>
        <h4>Modal Body</h4>
        <h4>Modal Footer</h4>
        <h4>Name: { props.name}</h4>
        <button onClick={props.toggleModal}>Close modal</button>
      </div>
    </div>, document.getElementById('portal-root'))
    
  )
}

export default Modal