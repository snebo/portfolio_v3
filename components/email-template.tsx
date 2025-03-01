import * as React from 'react';

interface EmailTemplateProps {
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, message }) => (
	<div
		style={{
			fontFamily: 'Arial, sans-serif',
			maxWidth: '600px',
			margin: '0 auto',
			padding: '20px',
			border: '1px solid #ddd',
			borderRadius: '10px',
			backgroundColor: '#f9f9f9',
		}}
	>
		<h2 style={{ color: '#333', textAlign: 'center' }}>New Message from Your Portfolio</h2>

		<p style={{ fontSize: '16px', color: '#555' }}>
			You have received a new message from your portfolio website.
		</p>

		<div
			style={{
				backgroundColor: '#fff',
				padding: '15px',
				borderRadius: '8px',
				border: '1px solid #ddd',
				marginTop: '10px',
			}}
		>
			<p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>{message}</p>
		</div>

		<p style={{ fontSize: '14px', color: '#777', marginTop: '20px' }}>
			Reply directly to{' '}
			<a href={`mailto:${email}`} style={{ color: '#0073e6', textDecoration: 'none' }}>
				{email}
			</a>
			.
		</p>

		<footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
			<hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
			<p>&copy; {new Date().getFullYear()} Nebo Stefano. All Rights Reserved.</p>
		</footer>
	</div>
);
