import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav id='nav'>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/browse">Browse</NavLink>
				</li>
				<li>
					<NavLink to="/sell">Sell</NavLink>
				</li>
				<li>
					<NavLink to="/membership" id='mem'>Membership</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;