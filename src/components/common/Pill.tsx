import { cn } from '@/lib/utils';

export default function Pill({ title, className = '' }: { title: string; className?: string }) {
	return (
		<>
			<p
				className={cn(
					'bg-emerald-200 py-3 px-6 rounded-sm text-xs font-semibold',
					className
				)}
			>
				{title}
			</p>
		</>
	);
}
