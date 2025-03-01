'use client';
import type { SectionName } from '@/lib/types';
import React, { createContext, useState } from 'react';

type ActiveSessionContextProviderProps = {
	children: React.ReactNode;
};
type ActiveSessionContextType = {
	activeSession: SectionName;
	setActiveSession: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSessionContext = createContext<ActiveSessionContextType | null>(null);

export default function ActiveSessionContextProvider({
	children,
}: ActiveSessionContextProviderProps) {
	const [activeSession, setActiveSession] = useState<SectionName>('Home'); // for tracking location on page
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSessionContext.Provider
			value={{ activeSession, setActiveSession, timeOfLastClick, setTimeOfLastClick }}
		>
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
