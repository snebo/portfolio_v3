'use server';
import { EmailTemplate } from '@/components/email-template';
import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	console.log('running on server');
	const senderMail = formData.get('senderEmail');
	const senderMessage = formData.get('senderMessage');

	if (!validateString(senderMail) || !validateString(senderMessage)) {
		return {
			error: 'fields missing',
		};
	}

	const { data, error } = await resend.emails.send({
		from: 'Portfolio Contact Form <onboarding@resend.dev>',
		to: ['snebo54@hotmail.com'],
		subject: 'Message From Contact Form',
		react: await EmailTemplate({
			email: senderMail?.toString() ?? '',
			message: senderMessage?.toString() ?? '',
		}),
	});

	if (error) {
		return { error: error.message || 'Failed to send email' };
	}

	console.log('sent mail: ', data);

	// ✅ Return a success response
	return { success: true };
};
