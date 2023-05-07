import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hobby from '../Components/Hobby';


const Sell = () => {
  
 const navigate = useNavigate();
  return (
    <div>
      <Hobby />
    </div>
  )
}

export default Sell