import { DoctorServiceArea } from '@/components/frontEnd/doctor/DoctorServiceArea';
import { FixedFooterBook } from '@/components/frontEnd/doctor/FixedFooterBook';
import Image from 'next/image';

export default function DoctorDetailsPage() {
	return (
		<>
			<div className="py-10">
				<div className="max-w-4xl bg-white mx-auto shadow-md rounded-md min-h-screen">
					{/* Doctor Intro */}
					<div className="py-6 px-8 flex items-center justify-between">
						<div className="left">
							<h2 className="text-2xl font-bold tracking-wider">Mark Snow PaC</h2>
							<h3 className="text-gray-400 font-bold text-xs">Family Medicine</h3>

							<div className="mt-5">
								<h3 className="font-bold">In-person doctor visit</h3>
								<p className="text-xs text-gray-400 font-bold">
									312, Lex Fullerton Road, Kal Marx Square, Jersey, USA
								</p>
							</div>
						</div>
						<div className="left">
							<Image
								src="/placeholder_svcs.jpg"
								width={200}
								height={200}
								alt="Mark Snow"
								className="w-36 h-36 rounded-full object-cover ring ring-teal-600 hover:scale-105 duration-300"
							/>
						</div>
					</div>
					{/* doctors svcs */}
					<DoctorServiceArea />
				</div>
			</div>
			<FixedFooterBook />
		</>
	);
}
