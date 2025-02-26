import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
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
		hash: 'experience',
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
		title: 'project title',
		description: 'description of project',
		tags: ['languages', 'frameworks', 'database'],
		// imgaeUrl: projectImage
	},
] as const;

export const skillsData = ['HTML', 'CSS', '...'] as const;
