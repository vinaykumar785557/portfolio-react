import React from 'react';
import classes from '../styles/Skills.module.css';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from '@mui/lab';

import { skills } from '../data.js';
import { Paper } from '@mui/material';

const paperstyle = {
	padding: '8px 1px',
	textAlign: 'center',
	backgroundColor: '#cdcdff',
};

const contentstyle = {
	width: '250px',
	borderRadius: '0',
	border: 'none',
};

const style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

function Skills() {
	return (
		<>
		
		<h2>Skills</h2>
		<div className={classes.skills_wrapper}>
			
			<Timeline position='alternate' style={style}>
				{skills.map((skill) => {
					return (
						<TimelineItem style={contentstyle}>
							<TimelineSeparator>
								<TimelineDot color='primary' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={1} style={paperstyle}>
									{skill}
								</Paper>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</Timeline>
		</div>
		</>
	);
}

export default Skills;
