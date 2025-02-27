'use client';
import profileImage from '@/public/profileImage.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
						className="text-3xl absolute bottom-0 right-0"
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
				className="mt-10 px-4 text-xl font-medium !leading-[1.5rem]"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
			>
				<span className="font-semibold">Hi, I&apos;m Stefano &mdash;</span>{' '}
				<span className="font-bold">Backend Software Engineer</span> with{' '}
				<span className="font-bold">4+ years</span> of experience building reliable and efficient
				web applications. I focus on creating strong backend systems that work seamlessly with{' '}
				<span className="font-semibold text-black/65">user-friendly interfaces</span>, ensuring
				everything runs smoothly behind the scenes.
			</motion.h1>

			<motion.h1
				className="mt-3 mb-12 px-4 text-xl font-medium !leading-[1.5rem]"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
			>
				I enjoy solving complex problems and making technology feel effortless for users.
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
						className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
					>
						Contact me here{' '}
						<BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
					</Link>
				}
				<a
					className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-105 hover:scale-105 hover:bg-white hover:border-black/55 active:scale-95 transition border border-black/10"
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
						className="bg-white text-gray-700 p-4 rounded-full border border-black/10 focus:scale-105 hover:scale-110 hover:bg-white hover:border-black/55 hover:text-gray-950 transition-all"
					>
						{<BsLinkedin></BsLinkedin>}
					</a>
					<a
						href="https://github.com/snebo"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-gray-700 p-4 rounded-full border border-black/10 focus:scale-105 hover:scale-110 hover:bg-white hover:border-black/55 hover:text-gray-950 transition-all"
					>
						{<FaGithub></FaGithub>}
					</a>
				</div>
			</motion.div>
		</section>
	);
}
