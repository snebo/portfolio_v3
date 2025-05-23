'use client';
import { useTheme } from '@/context/theme-context';
import { experienceData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

export default function Experience() {
	const { ref } = useSectionInView({ sectionName: 'Experience', thresoldValue: 0.3 });
	const { theme } = useTheme();
	return (
		<section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experienceData.map((experience, index) => (
					// react fragment wont take up any space in the dom, and we don't pass a key to a 3rd party package
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
								boxShadow: 'none',
								border: '1px solid rgba(0, 0, 0, 0.05)',
								textAlign: 'left',
								padding: '1.3rem 2rem',
							}}
							contentArrowStyle={{
								borderRight:
									theme === 'light'
										? '0.4rem solid #9ca3af'
										: '0.4rem solid rgba(255, 255, 255, 0.5)',
							}}
							date={experience.date}
							icon={experience.icon}
							iconStyle={{
								background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
								fontSize: '1.5rem',
							}}
						>
							<h3 className="font-semibold capitalize">{experience.title}</h3>
							<p className="font-normal !mt-0">{experience.location}</p>
							<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 ">
								{experience.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
