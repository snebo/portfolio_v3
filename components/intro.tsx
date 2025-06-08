'use client';
import { useActiveSessionContext } from '@/context/active-session-context';
import { useSectionInView } from '@/lib/hooks';
import profileImage from '@/public/profileImage.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowDown, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
	const { ref } = useSectionInView({ sectionName: 'Home', thresoldValue: 0.5 });
	const { setActiveSession, setTimeOfLastClick } = useActiveSessionContext();
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-60" id="home" ref={ref}>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.5,
						}}
					>
						{
							<Image
								src={profileImage}
								alt="stefano profile"
								// width={200}
								className="border-[0.3rem] w-32 h-32 object-cover border-[#fff] rounded-full shadow-xl"
							/>
						}
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.5,
							duration: 0.8,
						}}
					>
						✌️
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mt-10 px-4 text-lg sm:text-2xl font-medium sm:!leading-[2.8rem]"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
			>
				<span>I&apos;m </span>
				<span className="font-semibold">Stefano &mdash;</span>{' '}
				<span className="font-bold">Backend-focused Software Engineer</span> with{' '}
				<span className="font-bold">3+ years</span> of experience building fast and reliable web
				applications. I&apos;m Full-stack capable, always building, and love the process of turning
				complex problems into actionable solutions.
			</motion.h1>

			<motion.h1
				className="mt-3 mb-12 px-4 text-lg sm:text-xl font-bold !leading-[1.6rem] relative"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
			>
				<span className="relative inline-block">
					<span
						className="absolute inset-0 blur-lg animate-glow-gradient"
						aria-hidden="true"
						style={{
							WebkitMaskImage: 'linear-gradient(90deg, #fff 80%, transparent 100%)',
							maskImage: 'linear-gradient(90deg, #fff 80%, transparent 100%)',
							opacity: 0.7,
						}}
					/>
					<span className="bg-gradient-to-r from-purple-700 via-pink-400 to-pink-500 bg-clip-text text-transparent">
						Code architect, problem-solver, backend whisperer.
					</span>
				</span>
				<style jsx>{`
					@keyframes glow-gradient {
						0% {
							opacity: 0.7;
							filter: blur(8px);
							background-position: 0% 50%;
						}
						50% {
							opacity: 1;
							filter: blur(16px);
							background-position: 100% 50%;
						}
						100% {
							opacity: 0.7;
							filter: blur(8px);
							background-position: 0% 50%;
						}
					}
					.animate-glow-gradient {
						animation: glow-gradient 3s ease-in-out infinite;
						background-size: 200% 200%;
					}
				`}</style>
			</motion.h1>
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base font-medium cursor-pointer"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ deay: 0.5, type: 'spring', duration: 1.25 }}
			>
				{
					<Link
						href="#contact"
						className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition dark:bg-gray-700"
						onClick={() => {
							setActiveSession('Contact');
							setTimeOfLastClick(Date.now());
						}}
					>
						Contact Me
						<BsArrowDown className="opacity-70 group-hover:translate-y-2 transition" />
					</Link>
				}
				<a
					className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-105 hover:scale-105 hover:bg-white hover:border-black/55 active:scale-95 transition border border-black/10 dark:bg-white/10 dark:text-white"
					href="/STEFANO-NEBO-RESUME.pdf"
					download={true}
				>
					Download CV {<HiDownload />}
				</a>
				<div className="flex items-center justify-between gap-3">
					<a
						href="https://www.linkedin.com/in/stefano-nebo/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-gray-700 p-4 rounded-full border border-black/10 focus:scale-105 hover:scale-110 hover:bg-white hover:border-black/55 hover:text-gray-950 transition-all dark:bg-white/10 dark:text-white"
					>
						{<BsLinkedin></BsLinkedin>}
					</a>
					<a
						href="https://github.com/snebo"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-gray-700 p-4 rounded-full border border-black/10 focus:scale-105 hover:scale-110 hover:bg-white hover:border-black/55 hover:text-gray-950 transition-all dark:bg-white/10 dark:text-white"
					>
						{<FaGithub></FaGithub>}
					</a>
				</div>
			</motion.div>
		</section>
	);
}
