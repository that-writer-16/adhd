import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = () => {
  return (
    <div>
    <NavLink to="/item/edit">
      <h4>Name</h4>
      <img />
      <p>Description</p>
      </NavLink>
    </div>
  )
}

export default Item