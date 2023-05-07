import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hobby = () => {
  
 const navigate = useNavigate();
  return (
    <div>
      <h3>Name</h3>
      <img />
      <h3>Price</h3>
      <button>Buy</button>
      <h3>Details</h3>
      <p>Details</p>

    </div>
  )
}

export default Hobby