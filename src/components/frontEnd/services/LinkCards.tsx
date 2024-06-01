import { cn } from '@/lib/utils';
import Link from 'next/link';

type LinkCardProp = {
	title: string;
	slug: string;
};

type Props = {
	links?: LinkCardProp[];
	className?: string;
};

export default function LinkCards({ links = [], className = '' }: Props) {
	return (
		<>
			<div className="flex flex-wrap gap-3 max-w-7xl">
				{links.length > 0 &&
					links.map((item, i) => <LinkCard key={i} link={item} className={className} />)}
				{links.length <= 0 && <p>No Data Added yet</p>}
			</div>
		</>
	);
}

function LinkCard({ link, className }: { link: LinkCardProp; className: string }) {
	return (
		<>
			<Link
				href={`/services/${link.slug}`}
				className={cn(
					'rounded-md flex gap-4 py-3 px-6 bg-slate-900 text-slate-50 hover:bg-teal-800 hover:scale-105 duration-300',
					className
				)}
			>
				<h2>{link.title}</h2>
				<span>&rarr;</span>
			</Link>
		</>
	);
}
