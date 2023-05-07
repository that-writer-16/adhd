import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>404 Page Not Found</h2>
    </div>
  )
}

export default NoMatch
