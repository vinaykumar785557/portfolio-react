import React from 'react';
import classes from '../styles/Home.module.css';
import { about } from '../data.js';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
function Home() {
	const { name, role, description, social } = about;
	return (
		<div className={classes.home_wrapper}>
			<h1>
				Hi, <span>I am</span> {name}
			</h1>

			<h2>{role}</h2>

			<div className={classes.descriptionpara}>
				<p>{description.firstparagraph}</p>
				<p>{description.secondparagraph}</p>
				<p>{description.thirdparagraph}</p>
			</div>
			<div className={classes.buttons}>
				<Link
					to='../Resume.docx'
					target='_blank'
					download
					className={classes.link}>
					Resume
				</Link>
				<button
					onClick={() => window.open(social.github)}
					className={classes.btn}>
					<GitHub />
				</button>
				<button
					onClick={() => window.open(social.linkedin)}
					className={classes.btn}>
					<LinkedIn />
				</button>
			</div>
		</div>
	);
}

export default Home;
