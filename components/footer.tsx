import React from 'react';

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {new Date().getFullYear()} Stefano. All rights Reserved
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with React and Next.Js (App
				Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, and
				Vercel hosting.
			</p>
		</footer>
	);
}
