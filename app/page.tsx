// import Image from 'next/image';

import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="mt-[40rem] sm:mt-[18rem] md:mt-[20rem] flex flex-col items-center px-4">
				<Intro />
				<SectionDivider />
			</main>
			<footer className="">{/* footer goes here */}</footer>
		</div>
	);
}
