import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hobby from '../Components/Hobby';


const Browse = () => {
  
 const navigate = useNavigate();
  return (
    <div>
      <Hobby />
      <Hobby />
      <Hobby />
      <Hobby />
    </div>
  )
}

export default Browse