import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function PageNotFound() {

  var navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  })
  return (
    <div>PageNotFound 404</div>
    // <Navigate to='/home'/>
  )
}

export default PageNotFound