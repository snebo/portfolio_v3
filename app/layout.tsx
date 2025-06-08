import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSessionContextProvider from '@/context/active-session-context';
import ThemeContextProvider from '@/context/theme-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stefano | Portfolio',
	description:
		'Stefano is a fullstack developer with a focus on Backend Development, DevOps, and Cloud Computing. He is passionate about building scalable and efficient systems.',
	openGraph: {
		title: 'Stefano | Portfolio',
		description:
			'Stefano is a fullstack developer with a focus on Backend Development, DevOps, and Cloud Computing. He is passionate about building scalable and efficient systems.',
		url: 'https://stefano-nebo.vercel.app/',
		siteName: 'Stefano | Portfolio',
		images: [
			{
				url: 'https://stefano-nebo.vercel.app/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Stefano | Portfolio',
			},
		],
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		title: 'Stefano | Portfolio',
		description: 'Stefano is a fullstack developer with a focus on Backend Development',
		card: 'summary_large_image',
		site: '@stefano_dev',
		creator: '@stefano_dev',
		images: ['https://stefano-nebo.vercel.app/og-image.jpg'],
	},
	keywords: [
		'Stefano',
		'Portfolio',
		'Fullstack Developer',
		'Backend Development',
		'DevOps',
		'Cloud Computing',
		'Software Engineer',
		'Web Development',
		'Programming',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'React',
		'Next.js',
		'Express',
		'MongoDB',
		'PostgreSQL',
		'Docker',
		'Kubernetes',
		'AWS',
		'Azure',
		'stefano nebo',
		'snebo',
		'stefano nebo portfolio',
		'stefano nebo developer',
		'stefano nebo fullstack developer',
		'stefano nebo backend developer',
		'stefano nebo devops',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-32 sm:pt-44 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className="bg-[#fbcfd1] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] -z-10 absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeContextProvider>
					<ActiveSessionContextProvider>
						<Header />
						{children}
						<Footer />
						<Toaster position="top-center" />
					</ActiveSessionContextProvider>
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
