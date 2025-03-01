import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSessionContextProvider from '@/context/active-session-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stefano | Portfolio',
	description: 'Stefano is a fullstack developer with a focus on Backend engineering',
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
				<div className="bg-[#fbcfd1] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] -z-10 absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<ActiveSessionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster position="top-center" />
				</ActiveSessionContextProvider>
				<ThemeSwitch />
			</body>
		</html>
	);
}
