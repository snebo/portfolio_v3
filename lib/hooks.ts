import { useActiveSessionContext } from '@/context/active-session-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

type useSectionInViewProps = {
	sectionName: SectionName;
	thresoldValue: number;
};

export function useSectionInView({ sectionName, thresoldValue }: useSectionInViewProps) {
	const { ref, inView } = useInView({
		threshold: thresoldValue,
	});
	const { setActiveSession, timeOfLastClick } = useActiveSessionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSession(sectionName);
		}
	}, [inView, setActiveSession, timeOfLastClick, sectionName]);

	return {
		ref,
	};
}
