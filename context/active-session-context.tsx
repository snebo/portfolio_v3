'use client';
import { links } from '@/lib/data';
import React, { createContext, useState } from 'react';

type SectionName = (typeof links)[number]['name'];
type ActiveSessionContextProviderProps = {
	children: React.ReactNode;
};
type ActiveSessionContextType = {
	activeSession: SectionName;
	setActiveSession: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSessionContext = createContext<ActiveSessionContextType | null>(null);

export default function ActiveSessionContextProvider({
	children,
}: ActiveSessionContextProviderProps) {
	const [activeSession, setActiveSession] = useState<SectionName>('Home'); // for tracking location on page

	return (
		<ActiveSessionContext.Provider value={{ activeSession, setActiveSession }}>
			{children}
		</ActiveSessionContext.Provider>
	);
}

export function useActiveSessionContext() {
	const context = React.useContext(ActiveSessionContext);
	if (context === null) {
		throw new Error('useActiveSessionContext must be used within a ActiveSessionContextProvider');
	}
	return context;
}
