import React from 'react';
import { NavLink } from 'react-router-dom';

const SellHobby = () => {
	return (
		<div id='sHobby' className='Center'>
			<div>
				<img id='sHobbyImage' alt=''/>
				<div id='sHobbyInfo'>
					<p className='sHInfo'>Name</p>
					<NavLink to="/hobby/edit">
						<button>
							Edit
						</button>
					</NavLink>
				</div>
			</div> 
		</div>
	)
}

export default SellHobby