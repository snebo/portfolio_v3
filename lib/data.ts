import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
import chessEngine from '@/public/chessGame.png';
import management from '@/public/dashboard-project.png';
import etchSketch from '@/public/etchASketch.png';
import gameDev from '@/public/gameDev.webp';
import memoryGame from '@/public/memory-game.png';
import nemoAsr from '@/public/nemo-transcription.png';
import exampleProject from '@/public/project-example.png';
import resumeFast from '@/public/resumeFast.png';
import zoomBot from '@/public/zoom sdk.png';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';

// you can import your images here using
// import customName from @/public/imageName.xxx

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experienceData = [
	{
		title: 'Software Engineer - ExamReady',
		location: 'Remote',
		description:
			'Spearheaded an ASR service using NVIDIA NeMo, Flask, and OpenAI APIs, automating transcription workflows and improving accuracy.',
		icon: React.createElement(LuBriefcase),
		date: '2024 - Present',
	},
	{
		title: 'Bachelor of Technology in Industrial Mathematics',
		location: 'Olusegun Agagu University of Science and Technology, Nigeria',
		description:
			'Studied mathematical modeling, algorithms, and problem-solving techniques applicable to real-world industries.',
		icon: React.createElement(LuGraduationCap),
		date: '2024',
	},
	{
		title: 'Backend Developer - Inventors Community',
		location: 'Remote',
		description:
			'Led backend development using NestJS and MongoDB, implemented a scalable mailing service, and conducted unit testing with Jest.',
		icon: React.createElement(LuBriefcase),
		date: '2023 - Present',
	},
	{
		title: 'CodePath Software Engineering Course',
		location: 'Remote',
		description:
			'Completed an intensive training program covering data structures, algorithms, and full-stack web development.',
		icon: React.createElement(LuGraduationCap),
		date: '2024',
	},
	{
		title: 'Data Analyst Intern - TownCriers',
		location: 'Lagos, Nigeria',
		description:
			'Automated data analysis workflows with Python, reducing processing time and enhancing market penetration strategies.',
		icon: React.createElement(LuBriefcase),
		date: '2023',
	},
	{
		title: 'Frontend Developer Intern - Tech-Up',
		location: 'Remote, Nigeria',
		description:
			'Integrated customer service chat, improved website responsiveness, and conducted UI/UX optimizations.',
		icon: React.createElement(LuBriefcase),
		date: '2022 - 20s23',
	},
] as const;

export const projectsData = [
	{
		title: 'AI-Powered Transcription API',
		description:
			'Built a speech-to-text API using NVIDIA NeMo, optimized for accuracy with noise reduction and speaker adaptation.',
		tags: ['Python', 'NVIDIA NeMo', 'Google Colab', 'AI', 'Flask', 'Speech-to-Text'],
		imageUrl: nemoAsr,
		link: 'https://colab.research.google.com/drive/14Aci8ILNY5PoZVrnEOEpLqYxffBvHNHF'
	},
	{
		title: 'Giphy Memory Game',
		description: 'Developed a memory game using React, integrating Giphy API for dynamic content and animations.',
		tags: ['NextJs', 'JavaScript', 'React', 'Tailwind Css', 'Giphy API', 'Memory Game'],
		imageUrl: memoryGame,
		link: 'https://memo-rize-game.netlify.app/'
	},
	{
		title: 'Rails Author Management API',
		description:
			'Developed a Rails REST API for author management with authentication, role-based access, and Swagger docs.',
		tags: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'REST API', 'Swagger'],
		imageUrl: management,
		link: 'https://snebo.github.io/Admin_Dashboard/'
	},
	{
		title: 'Zoom Meeting AI Bot',
		description:
			'Built a Zoom bot to record audio, capture captions, and store transcripts securely with OAuth authentication.',
		tags: ['Zoom SDK', 'Docker', 'AWS', 'C++', 'Node.js', 'Linux', 'OAuth', 'AI', 'REST API'],
		imageUrl: zoomBot,
		link: 'https://app.qliphealth.com/'
	},
	{
		title: 'ResumeFast: Resume Builder',
		description: 'Developed a resume builder app with Next.js, allowing users to create and download resumes in PDF format.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'Resume Builder'],
		imageUrl: resumeFast,
		link: 'https://resumefast.netlify.app/'
	},
	{
		title: 'Python Chess Engine',
		description: 'Developed a chess engine in Python with a simple AI opponent, supporting standard chess rules.',
		tags: ['Python', 'Chess', 'AI', 'Game Development', 'Pygame'],
		imageUrl: chessEngine,
		link: 'https://github.com/snebo/Chess_AI'
	},
	{
		title: 'Etch-A-Sketch',
		description: 'Created an Etch-A-Sketch clone using React, allowing users to draw on a grid with customizable colors.',
		tags: ['JavaScript', 'CSS', 'Web Development'],
		imageUrl: etchSketch,
		link: 'https://snebo.github.io/Etch-a-sketch/'
	},
	{
		title: 'Flight Booker App',
		description:
			'Built a flight booking system with Rails and React, featuring authentication, payments, and real-time seat updates.',
		tags: ['Ruby on Rails', 'React', 'PostgreSQL', 'REST API', 'Full-Stack'],
		imageUrl: exampleProject,
		link: 'https://github.com/snebo/flight-booker'
	},
	{
		title: 'mobile Monopoly',
		description:
			'Created a mobile version of Monopoly using Unity',
		tags: ['Unity', 'C#', 'Blender', 'Game Development', 'Mobile Game'],
		imageUrl: gameDev,
		link: 'https://github.com/snebo/monopoly_Unity'
	},

] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'NestJS',
	'C++',
	'Ruby on Rails',
	'Python',
	'Flask',
	'SQL',
	'Mongoose',
	'PostgreSQL',
	'AWS (S3, Lambda)',
	'REST API',
	'WebSockets',
	'Tailwind CSS',
	'Bootstrap',
	'Framer Motion',
	'Testing',
	'Docker',
	'Kubernetes',
	'CI/CD (GitHub Actions)',
	'Linux',
	'Bash',
	'OpenAI API',
	'NVIDIA NeMo',
	'Zoom SDK',
	'Git',
] as const;
