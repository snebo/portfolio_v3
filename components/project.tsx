'use client';

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

// set an object to have the types from the imported data.
// the 'number means it can be any one of the arrays index
type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.1 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			className="group mb-3 sm:mb-8 last:mb-0"
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
		>
			<section
				ref={ref}
				className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 sm:group-even:pl-8 rounded-lg transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
			>
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[19rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								key={index}
								className="bg-black/[0.7] px-3 py-1 uppercase text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt={title}
					quality={90}
					className="hidden sm:block top-8 absolute -right-40 w-[28.25rem] rounded-t-lg shadow-2xl grou-odd:right-[initial] group-odd:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.08] transition group-odd:group-hover:translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:rotate-2"
				/>
			</section>
		</motion.div>
	);
}
