'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {};

export function DoctorServiceArea({}: Props) {
	const [active, setActive] = useState('availability');
	return (
		<div>
			<div className="flex">
				<button
					onClick={() => setActive('service')}
					className={cn(
						'bg-teal-200 w-full py-3 text-teal-700 font-bold uppercase',
						active === 'service'
							? 'bg-teal-700 text-white border-4 border-teal-700 shadow-x text-xl'
							: ''
					)}
				>
					Service Details
				</button>
				<button
					onClick={() => setActive('availability')}
					className={cn(
						'bg-teal-200 w-full py-3 text-teal-700 font-bold uppercase',
						active === 'availability'
							? 'bg-teal-700 text-white border-4 border-teal-700 shadow-xl text-xl'
							: ''
					)}
				>
					Availability
				</button>
			</div>
			<div className="py-8 px-6">
				{active === 'service' && <div className="">Service Details Component</div>}
				{active === 'availability' && <div className="">Availability Component</div>}
			</div>
		</div>
	);
}
