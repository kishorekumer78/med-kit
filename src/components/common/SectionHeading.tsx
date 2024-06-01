import { cn } from '@/lib/utils';

export function SectionHeading({ title, className = '' }: { title: string; className?: string }) {
	return (
		<>
			<h2
				className={cn(
					'mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white',
					className
				)}
			>
				{title}
			</h2>
		</>
	);
}
