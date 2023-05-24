import React from 'react';

const Membership = () => {
  return (
    <div id='membership' className='hundo'>
      <div id='login' className='form Center'>
        <h3>Sign In</h3>
        <form>
          <input type='email' placeholder='Email' className='input' autofocus required/>
          <br/>
          <input type='password' placeholder='Password' className='input' required/>
          <br/>
          <input type='submit' value={"Sign In"}/>
        </form>
      </div>
      <div id='signUp' className='form Center'>
        <form>
          <h3>Sign Up</h3>
          <input type='text' placeholder='First Name' className='input'required/>
          <br/>
          <input type='text' placeholder='Last Name' className='input'required/>
          <br/>
          <input type='email' placeholder='Email' className='input'required/>
          <br/>
          <input type='password' placeholder='Password' className='input'required/>
          <br/>
          <input type='password' placeholder='Confirm Password' className='input'required/>
          <br/>
          <input type='submit' value={"Sign Up"}/>
        </form>
      </div>
    </div>
  )
}

export default Membership