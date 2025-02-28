'use client'; // the framer package uses 'use states' which is only available on client components
import { useActiveSessionContext } from '@/context/active-session-context';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion'; //handle animations
import Link from 'next/link';
import React from 'react';

export default function Header() {
	const { activeSession, setActiveSession } = useActiveSessionContext();
	return (
		<header className="z-[900] relative">
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0.3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[2.8rem] sm:w-[36rem] sm:rounded-full"
				initial={{ y: -100, opacity: 0, x: '-50%' }}
				animate={{ y: 0, opacity: 1, x: '-50%', transition: { delay: 0.25 } }}
			></motion.div>
			<nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{/* map over the links */}
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
						>
							<Link
								className={clsx(
									'flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition',
									{ 'text-gray-950': activeSession === link.name }
								)}
								href={link.hash}
								onClick={() => setActiveSession(link.name)}
							>
								{link.name}
								{link.name === activeSession && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10 p-4 w-full"
										layoutId="activeSession"
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}
