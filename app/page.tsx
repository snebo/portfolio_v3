// import Image from 'next/image';

import About from '@/components/about';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import ProjectSection from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDivider />
			<About />
			<ProjectSection />
			<Skills />
			<Experience />
		</main>
	);
}
