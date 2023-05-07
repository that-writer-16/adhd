import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div id='contact'>
        <h3>Contact</h3>
        <p></p>
      </div>
      <div id='home'>
        <h3>About</h3>
        <p></p>
      </div>
      <div id='creator'>
        <h3>Creator</h3>
        <p></p>
      </div>
    </div>
  )
}

export default Home