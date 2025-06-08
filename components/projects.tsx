'use client';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import React from 'react';
import Project from './project';
import SectionHeading from './section-heading';

export default function ProjectSection() {
	const { ref } = useSectionInView({ sectionName: 'Projects', thresoldValue: 0.3 });
	return (
		<section id="projects" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
			<SectionHeading>my Projects</SectionHeading>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Link href={project.link} target="_blank" className="group">
							<Project {...project} />
						</Link>
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
