import React, { useState } from 'react'
import Modal from './Modal'

function Parent() {
  var [openModal, setOpenModal] = useState(false)
  
  let toggleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div className='parent-div'>
      <button onClick={toggleModal}>open model</button>
      {
        openModal && <Modal toggleModal={toggleModal} name='sachin'/>
      }
    </div>
  )
}

export default Parent