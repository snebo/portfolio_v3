'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import SectionHeading from './section-heading';

export default function About() {
	const { ref } = useSectionInView({ sectionName: 'About', thresoldValue: 0.5 });

	const navref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: navref,
		offset: ['0 1', '1.4 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	return (
		<section
			className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
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
					Over the years, I&apos;ve grown from a curious developer into a software engineer who
					builds scalable, efficient, and impactful solutions. My journey started with{' '}
					<span className="font-bold text-gray-700">game development</span> where i learnt the
					fundamentals of <span className="underline font-semibold">OOP</span> and then transitioned
					to backend development, where I worked on{' '}
					<span className="font-bold">secure APIs and databases</span> using{' '}
					<span className="font-bold"> NestJS and MongoDB</span> for platforms like{' '}
					<span className="italic font-semibold">Inventors </span>.
				</p>
				<p className="mb-3">
					I later expanded my expertise by developing a{' '}
					<span className="font-bold">transcription API</span> with{' '}
					<span className="font-bold">NVIDIA&apos;s NeMo</span> for{' '}
					<span className="italic font-semibold">ExamReady</span>, diving into AI-powered speech
					processing. To further sharpen my problem-solving skills, I trained with{' '}
					<span className="font-bold">CodePath</span>, strengthening my full-stack development
					abilities, and completed an intensive technical program focused on{' '}
					<span className="font-bold">data structures and algorithms</span>.
				</p>
				<p className="mb-3">
					Recently, I&apos;ve been building an{' '}
					<span className="font-bold text-gray-900">automated Zoom meeting capture bot</span>,
					leveraging <span className="font-bold">Zoom&apos;s Headless Meeting SDK</span> to record
					audio, captions, and participant data—pushing the boundaries of automation in virtual
					communication.
				</p>
				<p className="mb-3">
					Today, I specialize in{' '}
					<span className="font-semibold">
						building reliable backend systems, optimizing databases, and integrating cloud-based
						solutions
					</span>{' '}
					to power seamless digital experiences. I thrive on tackling complex engineering challenges
					and delivering solutions that just work.
				</p>
				<p className="mb-3">
					If you&apos;re looking for a developer who blends technical depth with adaptability and
					problem-solving, let&apos;s connect&mdash;I&apos;d love to bring my expertise to your
					team!
				</p>
			</motion.div>
		</section>
	);
}
