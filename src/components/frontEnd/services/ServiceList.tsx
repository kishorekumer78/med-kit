import { Service } from '@/lib/types';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
	services: Service[];
};

export function ServiceList({ services }: Props) {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{services.length > 0 &&
					services.map((item, i) => <ServiceCard key={i} service={item} />)}
			</div>
		</>
	);
}
function ServiceCard({ service }: { service: Service }) {
	return (
		<>
			<Link
				href={`/services/${service.slug}`}
				className="rounded-md bg-gray-100 hover:bg-slate-200 hover:scale-105 duration-300 flex gap-4 overflow-hidden"
			>
				<Image
					width={2480}
					height={2480}
					src={service.image}
					alt={service.title}
					className="w-1/3 object-cover aspect-auto"
				/>
				<div className="flex flex-col w-2/3 py-4 justify-center">
					<h2 className="font-semibold">{service.title}</h2>
					<p className="text-xs text-muted-foreground">{service.description}</p>
				</div>
			</Link>
		</>
	);
}
