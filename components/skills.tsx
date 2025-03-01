'use client';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './section-heading';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView({ sectionName: 'Skills', thresoldValue: 0.5 });
	return (
		<section
			className="mb-28 max-w-[53rem] scroll-mt-20 text-center sm:mb-40"
			ref={ref}
			id="skills"
		>
			<SectionHeading>My Skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={index}
						key={index}
						className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 hover:bg-slate-100"
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
