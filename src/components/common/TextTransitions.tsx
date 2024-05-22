'use client';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
export function TextTransitions({
	texts,
	className = ''
}: {
	texts: string[];
	className?: string;
}) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<span className={className}>
			<TextTransition springConfig={presets.wobbly}>
				{texts[index % texts.length]}
			</TextTransition>
		</span>
	);
}
