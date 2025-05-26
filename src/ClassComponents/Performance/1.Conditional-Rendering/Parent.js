import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
  var [isLoggedIn, setIsLoggedIn] = useState(true)
  
  
  // if (isLoggedIn) {
  // return  <Profile setIsLoggedIn={setIsLoggedIn }/>
  // } else {
  //   return <Login setIsLoggedIn={setIsLoggedIn } />
  // }

  // var element

  // if (isLoggedIn) {
  //    element = <Profile setIsLoggedIn={setIsLoggedIn }/>
  // } else {
  //    element = <Login setIsLoggedIn={setIsLoggedIn } />
  // }

  // return element


  //ternary 

  // return  isLoggedIn ?  <Profile setIsLoggedIn={setIsLoggedIn }/>: <Login setIsLoggedIn={setIsLoggedIn } />
    
  //short circuit
  // return isLoggedIn && <Profile setIsLoggedIn={setIsLoggedIn }/>

}

export default Parent