'use client';
import { experienceData } from '@/lib/data';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

export default function Experience() {
	return (
		<section id="experience">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experienceData.map((experience, index) => (
					// react fragment wont take up any space in the dom, and we don't pass a key to a 3rd party package
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: '#f3f4f6',
								boxShadow: 'none',
								border: '1px solid rgba(0, 0, 0, 0.05)',
								textAlign: 'left',
								padding: '1.3rem 2rem',
							}}
							contentArrowStyle={{ borderRight: '0.4rem solid  #9ca3af' }}
							date={experience.date}
							icon={experience.icon}
							iconStyle={{ background: 'white', fontSize: '1.5rem' }}
						>
							<h3 className="font-semibold capitalize">{experience.title}</h3>
							<p className="font-normal !mt-0">{experience.location}</p>
							<p className="!mt-1 !font-normal text-gray-700">{experience.description}</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
