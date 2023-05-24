import React from 'react';
import { NavLink } from 'react-router-dom';

const Hobby = () => {
  return (
    <div id='cHobby'>
      <NavLink to="/hobby">
        <div id='bHobby'>
          <img id='cHobbyImage'/>
          <div id='cHobbyInfo'>
            <p className='cHInfo'>Name</p>
            <p className='cHInfo'>Price</p>
          </div>
        </div> 
      </NavLink>
    </div>
  )
}

export default Hobby