import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ToggleButton } from '@/components/common/ToggleButton';
import Link from 'next/link';
import { Map } from 'lucide-react';
import { cn } from '@/lib/utils';
import DoctorsCarousal from './DoctorsCarousal';

export type DoctorData = {
	id: number;
	name: string;
	address?: string;
	availability: { time: string; pd: string }[];
	// image:string; //TODO:
	// specialty:string;
	// isAvailable:boolean
	// visitFee: number
};
type Props = {
	title: string;
	inPerson?: boolean;
	doctorsData?: DoctorData[];
	bg?: string;
};

export function DoctorsList({
	title = 'Telehealth Visit',
	inPerson = true,
	doctorsData = [],
	bg = ''
}: Props) {
	return (
		<>
			<div className={cn('bg-gray-100 py-8 lg:py-20', bg)}>
				<MaxWidthWrapper>
					<SectionHeading title={title} />
					<div className="flex items-center justify-between py-4">
						{inPerson ? (
							<Link href="#" className="text-teal-700 flex items-center ">
								<Map className="w-4 h-4 mr-2 flex-shrink-0" />
								<span>Map View</span>
							</Link>
						) : (
							<ToggleButton title="Within 2 hours" />
						)}
						<Link
							href="#"
							className="bg-slate-50 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-slate-50 py-3 px-6 rounded-md"
						>
							See More
						</Link>
					</div>
					<div className="py-6 ">
						{/* Doctors Carousel */}
						<DoctorsCarousal doctorsData={doctorsData} inPerson={inPerson} />
					</div>
				</MaxWidthWrapper>
			</div>
		</>
	);
}
