'use client';
import { useActiveSessionContext } from '@/context/active-session-context';
import { projectsData } from '@/lib/data';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './project';
import SectionHeading from './section-heading';

export default function ProjectSection() {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});
	const { setActiveSession } = useActiveSessionContext();

	useEffect(() => {
		if (inView) {
			setActiveSession('Projects');
		}
	}, [inView, setActiveSession]);
	return (
		<section id="projects" className="scroll-mt-28" ref={ref}>
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
