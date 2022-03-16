import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../avataaars.png';
import { Link } from 'react-router-dom';
import { MenuSharp } from '@mui/icons-material';

function Navbar() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [toggleMenu, setToggleMenu] = useState(false);

	console.log(`current screen width:${screenWidth}`);
	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<div className='navbar'>
			<div className='navbar__leftside'>
				<Link to='/'>
					<img src={logo} alt='avatar'></img>
				</Link>
			</div>

			<div className='navbar__rightside'>
				{(toggleMenu || screenWidth > 600) && (
					<nav className='navlist'>
						<ul className='navitems'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/projects'>Projects</Link>
							</li>
							<li>
								<Link to='/skills'>Skills</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</nav>
				)}

				<div className='buttonwrapper'>
					<button onClick={toggleNav}>
						<MenuSharp />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
