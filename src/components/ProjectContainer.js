import { GitHub, Launch } from '@mui/icons-material';
import React from 'react';
import uniqid from 'uniqid';
import './ProjectContainer.css';
function ProjectContainer({ project }) {
	return (
		<div className='project'>
			<h3 className='project__name'>{project.name}</h3>
			<p className='project__description'>{project.description}</p>
			<ul className='project__stack'>
				{project.stack.map((item) => (
					<li key={uniqid()} className='project_stack_list'>
						{item}
					</li>
				))}

				<button className='button_links'>
					<GitHub
						onClick={() => window.open('https://github.com/vinaykumar785557')}
					/>
				</button>

				<button
					className='button_links'
					onClick={() => window.open(project.sourceCode)}>
					<Launch />
				</button>
			</ul>
		</div>
	);
}

export default ProjectContainer;
