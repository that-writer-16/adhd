import React from 'react';
import { useNavigate } from 'react-router-dom';


const Membership = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='login'>
        <form>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='submit'>Log In</input>
        </form>
      </div>
      <div id='signUp'>
        <form>
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Last Name'></input>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='password' placeholder='Confirm Password'></input>
          <input type='submit'>Sign Up</input>
        </form>
      </div>
    </div>
  )
}

export default Membership