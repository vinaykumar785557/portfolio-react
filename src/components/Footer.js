import React from 'react';
import '../App.css';
function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<h3> Handcrafted by me &copy;{year} </h3>
		</footer>
	);
}

export default Footer;
