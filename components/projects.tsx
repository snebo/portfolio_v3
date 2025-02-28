import { projectsData } from '@/lib/data';
import React from 'react';
import Project from './project';
import SectionHeading from './section-heading';

export default function ProjectSection() {
	return (
		<section id="projects" className="scroll-mt-28">
			<SectionHeading>my Projects</SectionHeading>
			<div className="">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
