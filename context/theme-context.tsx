'use client';
import React, { useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProviderProps = { children: React.ReactNode };
type themeContextType = { theme: Theme; toggleTheme: () => void };

const ThemeContext = React.createContext<themeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [theme, setTheme] = useState<Theme>('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	};
	useEffect(() => {
		const localTheme = (window.localStorage.getItem('theme') as Theme) || null;
		if (localTheme) {
			setTheme(localTheme);
			document.documentElement.classList.toggle('dark', localTheme === 'dark');
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		}
	}, []);
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === null) {
		throw new Error('useTheme must be used within a ThemeContextProvider');
	}
	return context;
}
