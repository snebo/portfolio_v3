'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
	const { ref } = useSectionInView({ sectionName: 'Contact', thresoldValue: 0.5 });

	const [pending, setPending] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setPending(true);
		setError(null); // Clear previous errors

		const form = event.currentTarget; // Get reference to the form
		const formData = new FormData(form);

		try {
			const response = await sendEmail(formData);

			if (response?.error) {
				setError(response.error); // Show error if any
				toast.error(response.error);
			} else {
				form.reset(); // ✅ Reset form only on success
				toast.success('Email sent successfully!');
			}
		} catch (err) {
			setError('Something went wrong. Please try again.');
			console.log(err);
		} finally {
			setPending(false);
		}
	}

	return (
		<motion.section
			id="contact"
			className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]"
			ref={ref}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact</SectionHeading>
			<p className="text-lg text-center -mt-3">
				I would love to hear about your project and how I could help.
				<br />
				Please fill out the form or send me a mail at{' '}
				<a href="mailto:Snebo54@hotmail.com" className="underline font-semibold text-gray-950">
					Snebo54@hotmail.com
				</a>
				, and I&apos;ll get back to you as soon as possible.
			</p>
			<form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit}>
				<input
					type="email"
					name="senderEmail"
					className="h-14 border border-black/10 rounded-lg px-4"
					placeholder="Your email"
					required
					maxLength={500}
				/>
				<textarea
					name="senderMessage"
					className="h-52 border border-black/10 rounded-lg my-3 p-4"
					placeholder="Your message"
					required
					maxLength={2500}
				></textarea>
				<SubmitBtn pending={pending} />
				{error && <p className="text-red-500">{error}</p>}
			</form>
		</motion.section>
	);
}
