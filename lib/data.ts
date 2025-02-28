import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
import management from '@/public/dashboard-project.png';
import gameDev from '@/public/gamedev.jpg';
import nemoAsr from '@/public/nemo-transcription.png';
import exampleProject from '@/public/project-example.png';
import zoomBot from '@/public/zoom sdk.png';
import { LuGraduationCap } from 'react-icons/lu';

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
		title: 'CodePath Software Engineering Course',
		location: 'remote',
		description: 'A 3month intensive session bal bla bla...',
		icon: React.createElement(LuGraduationCap),
		date: '2024',
	},
] as const;

export const projectsData = [
	{
		title: 'AI-Powered Transcription API',
		description:
			'Built a speech-to-text API using NVIDIA NeMo, optimized for accuracy with noise reduction and speaker adaptation.',
		tags: ['Python', 'NVIDIA NeMo', 'Google Colab', 'AI', 'Flask', 'Speech-to-Text'],
		imageUrl: nemoAsr,
	},
	{
		title: 'Rails Author Management API',
		description:
			'Developed a Rails REST API for author management with authentication, role-based access, and Swagger docs.',
		tags: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'REST API', 'Swagger'],
		imageUrl: management,
	},
	{
		title: 'Zoom Meeting AI Bot',
		description:
			'Built a Zoom bot to record audio, capture captions, and store transcripts securely with OAuth authentication.',
		tags: ['Zoom SDK', 'Docker', 'AWS', 'C++', 'Node.js', 'Linux', 'OAuth', 'AI', 'REST API'],
		imageUrl: zoomBot,
	},
	{
		title: 'Flight Booker App',
		description:
			'Built a flight booking system with Rails and React, featuring authentication, payments, and real-time seat updates.',
		tags: ['Ruby on Rails', 'React', 'PostgreSQL', 'REST API', 'Full-Stack'],
		imageUrl: exampleProject, // Replace with actual image import
	},
	{
		title: 'Game Development Projects',
		description:
			'Created games in Unity, Ruby, and Python, focusing on AI, mechanics, and real-time interactions.',
		tags: ['Unity', 'C#', 'Ruby', 'Python', 'Pygame', 'Game Development', 'Blender'],
		imageUrl: gameDev,
	},
] as const;

export const skillsData = ['HTML', 'CSS', '...'] as const;
