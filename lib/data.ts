import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
import exampleProject from '@/public/project-example.png';
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
		title: 'project title',
		description:
			'description of project bla bla bla. this is me adding more description to the text to try and make it seem longers',
		tags: ['languages', 'frameworks', 'database'],
		imageUrl: exampleProject,
	},
] as const;

export const skillsData = ['HTML', 'CSS', '...'] as const;
