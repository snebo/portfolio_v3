import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
		<html lang="en">
			<body className={` bg-gray-50 text-gray-950 ${inter.className} relative pt-32 sm:pt-44`}>
				<div className="bg-[#fbcfd1] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] -z-10 absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<Header />
				{children}
			</body>
		</html>
	);
}
