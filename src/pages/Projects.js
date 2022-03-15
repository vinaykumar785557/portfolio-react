import React from 'react';
import uniqid from 'uniqid';
import ProjectContainer from '../components/ProjectContainer.js';
import { projects } from '../data.js';
import classes from '../styles/Project.module.css';

function Projects() {
	return (
		<div className={classes.container}>
			<h2 style={{ color: '#cdcdff' }}>Projects</h2>

			<div className={classes.projects_grid}>
				{projects.map((project) => (
					<ProjectContainer key={uniqid()} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
