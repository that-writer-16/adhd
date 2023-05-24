import {React,} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Hobby = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        <input type='image' src='/images/back.png'/>
      </button>
      <br/>
      <div id='pHobby' className='Center'>
        <div>
          <img id='pHobbyI'/>
        </div>
        <div>
          <h1 id='nHobby'>Name</h1>
          <h6 id='sellerName'>By Seller Name</h6>
          <h3>Price</h3>
          <NavLink to="/purchase">
            <button id='buy'>Purchase</button>
          </NavLink>
        </div>
        <div>
          <h3>Details</h3>
          <p>Details</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Hobby