'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';
import SectionHeading from './section-heading';

export default function About() {
	const { ref } = useSectionInView({ sectionName: 'About', thresoldValue: 0.5 });

	const navref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: navref,
		offset: ['0 1', '1.4 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	return (
		<section
			className="mb-28 max-w-[45rem] text-center text-lg leading-[1.9rem] sm:mb-40 scroll-mt-28"
			id="about"
			ref={ref}
		>
			<SectionHeading>About Me</SectionHeading>
			<motion.div
				className=""
				ref={navref}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
			>
				<p className="mb-3">
					Over time, I’ve grown from a curious game developer into a software engineer who builds
					fast, scalable, and meaningful solutions. It all started with{' '}
					<span className="font-bold text-gray-700 dark:text-gray-400">game development</span>,
					where I learned the core of{' '}
					<span className="underline font-semibold">object-oriented programming</span>, then
					transitioned into backend engineering — crafting{' '}
					<span className="font-bold">secure APIs and robust databases</span> using{' '}
					<span className="font-bold">NestJS and MongoDB</span> for platforms like{' '}
					<span className="italic font-semibold text-green-600">
						<Link
							href="https://www.linkedin.com/company/inventors-community/about/"
							target="_blank"
							className="hover:underline"
						>
							Inventors
						</Link>
					</span>
					.
				</p>
				<p className="mb-3">
					My work expanded into AI-driven tools when I built a{' '}
					<span className="font-bold">transcription API</span> using{' '}
					<span className="font-bold">NVIDIA NeMo</span> and{' '}
					<span className="font-bold">OpenAI</span> for{' '}
					<span className="italic font-semibold">ExamReady</span>, diving deep into speech
					processing. I also sharpened my full-stack and algorithmic skills through an advanced
					technical program at <span className="font-bold">CodePath</span>, focused on{' '}
					<span className="font-bold">
						data structures, algorithms, and full-stack architecture
					</span>
					.
				</p>
				<p className="mb-3">
					Most recently, I’ve been building an{' '}
					<span className="font-bold text-gray-900 dark:text-gray-50">
						automated Zoom meeting capture bot
					</span>{' '}
					using the <span className="font-bold">Zoom Headless Meeting SDK</span>, designed to record
					audio, captions, and participant data — pushing automation in virtual communication to a
					new level.
				</p>
				<p className="mb-3">
					These days, I focus on{' '}
					<span className="font-semibold">
						backend reliability, cloud integrations, and database performance
					</span>{' '}
					— building systems that are seamless, resilient, and built to scale.
				</p>
				<p className="mb-3">
					If you're looking for a developer who loves to learn, solve tough problems, and bring
					positive energy to the team — let's connect!
				</p>
			</motion.div>
		</section>
	);
}
