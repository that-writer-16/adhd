import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SellHobby from '../Components/SellHobby';


const Sell = () => {  
const navigate = useNavigate();
  return (
    <div id='sell' className='hundo'>
      <SellHobby />
      <NavLink to="/hobby/edit" id='editHobbyLink' className="Center">
        <img src='/images/plus.png'/><br/>
        New Hobby
      </NavLink>
    </div>
  )
}

export default Sell