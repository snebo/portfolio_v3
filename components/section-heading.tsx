import React from 'react';

export default function SectionHeading({ children }: Readonly<{ children: React.ReactNode }>) {
	return <h2 className="text-4xl font-semibold capitalize mb-8 text-center">{children}</h2>;
}
