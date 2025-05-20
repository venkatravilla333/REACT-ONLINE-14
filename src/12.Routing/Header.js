import React from 'react'
import './style.css'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <div className='logo-div'>
        <h3>Logo</h3>
      </div>
      <div className='links-div'>

      <NavLink to="/">Home</NavLink>
     
        <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}>About</NavLink>
   
      <NavLink to="/products">Products</NavLink>
      </div>
    </div>
  )
}

export default Header