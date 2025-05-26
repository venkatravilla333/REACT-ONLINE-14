import React from 'react';

import './style.css'

function Login(props) {
  return (
    <div  className='form-container'>
      <h3>Login</h3>
      <form>
        <div className='email'>
          <label htmlFor=''>Email</label>
          <input type='email' />
        </div>
        <div className='password'>
          <label htmlFor=''>Password</label>
          <input type='password' />
        </div>
        <button onClick={()=>props.setIsLoggedIn(true)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
