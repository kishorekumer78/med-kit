import { Stethoscope } from 'lucide-react';

type Props = {};

export function Specialty({ title }: { title: string }) {
	return (
		<>
			<p className="flex items-center gap-2 text-muted-foreground">
				<Stethoscope className="w-4 h-4" />
				<span>{title}</span>
			</p>
		</>
	);
}
