import { NavLink } from 'react-router-dom';

const NavBar = () => {
return (
<nav>
      <ul>
         <li>
            <NavLink to="/browse">Browse</NavLink>
         </li>
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/sell">Sell</NavLink>
         </li>
      </ul>
</nav>
);
};

export default NavBar;
