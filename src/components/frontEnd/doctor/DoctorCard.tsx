import Pill from '@/components/common/Pill';
import { Stethoscope, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Specialty } from './Speciality';
import { DoctorData } from './DoctorsList';

type Props = {
	inPerson?: boolean;
	doctor: DoctorData;
};

export default function DoctorCard({ inPerson = false, doctor }: Props) {
	const timeStamps = [
		{ time: '8.00', pd: 'am' },
		{ time: '8.30', pd: 'am' },
		{ time: '9.00', pd: 'am' },
		{ time: '9.30', pd: 'am' },
		{ time: '10.00', pd: 'am' },
		{ time: '10.30', pd: 'am' },
		{ time: '11.00', pd: 'am' }
	];
	return (
		<>
			<div className="border border-gray-200 bg-white inline-flex flex-col px-6 py-8 hover:border-teal-700 rounded-md  transition-all duration-300 shadow-md">
				<Link href={`/doctor/${doctor.id}`} className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold tracking-wider">{doctor.name}</h2>
					{inPerson && (
						<p className="text-muted-foreground text-xs py-3">{doctor.address}</p>
					)}
					<div className="flex items-center gap-4 py-4">
						<div className="relative">
							<Image
								src="/placeholder_svcs.jpg"
								width={200}
								height={200}
								alt="Mark Snow"
								className="w-20 h-20 rounded-full object-cover ring ring-teal-600 hover:scale-105 duration-300"
							/>
							{!inPerson && (
								<div className="absolute bottom-0 right-0 bg-teal-200 text-teal-700 p-2 rounded-full shadow-md">
									<Video className="w-4 h-4" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<Specialty title="Family Medicine" />
							<Pill title="Available Today" className="uppercase" />
						</div>
					</div>
				</Link>
				{/* Doctors pricing */}
				<div className="pt-6 border-t-2 border-gray-200">
					<h3 className="text-xs font-semibold flex items-center justify-between">
						<span>Tue Mar 23</span>
						<span className="text-orange-600">$137</span>
					</h3>
				</div>
				{/* Doctors time availability block */}
				<div className="py-4 grid grid-cols-3 gap-2">
					{doctor.availability.slice(0, 5).map((item, i) => (
						<Link
							key={i}
							href="#"
							className="rounded-md py-2 px-3 border border-teal-900 bg-teal-700 hover:bg-teal-900 text-white text-xs text-center tracking-wide font-semibold"
						>{`${item.time} ${item.pd}`}</Link>
					))}
					<Link
						href={`/doctor/${doctor.id}`}
						className="rounded-md py-2 px-3 text-teal-900 border border-teal-900 bg-white font-semibold tracking-wide text-xs text-center hover:bg-teal-900 hover:text-white"
					>
						More...
					</Link>
				</div>
			</div>
		</>
	);
}
