import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <div className='logo-div'>
        <h3>Logo</h3>
      </div>
      <div className='links-div'>
      <Link to="/home">Home</Link>
     
      <Link to="/about">About</Link>
   
      <Link to="/products">Products</Link>
      </div>
    </div>
  )
}

export default Header