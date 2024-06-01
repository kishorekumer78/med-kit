import { Brands } from '@/components/frontEnd/Brands';
import { Hero } from '@/components/frontEnd/Hero';
import { DoctorsList } from '@/components/frontEnd/doctor/DoctorsList';
import { TabbedSection } from '@/components/frontEnd/services/TabbedSection';
const docData = [
	{
		id: 1,
		name: 'John Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.30', pd: 'am' },
			{ time: '9.00', pd: 'am' },
			{ time: '8.30', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 2,
		name: 'Jane Doe',
		address: '193 Stand Street Texas, USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 9,
		name: 'Myth Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 3,
		name: 'Ran Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 4,
		name: 'Mah Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 5,
		name: 'Cox Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 6,
		name: 'Real Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	},
	{
		id: 7,
		name: 'Fake Doe',
		address: '143 Milford Street NY, Jersey,USA',
		availability: [
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' },
			{ time: '8.00', pd: 'am' }
		]
	}
];
export default function Home() {
	return (
		<>
			<Hero />
			<Brands />
			{/* services  */}
			<TabbedSection />
			<DoctorsList title="Telehealth Visit" inPerson={false} doctorsData={docData} />
			<DoctorsList title="In-person Visit" bg="bg-teal-100" doctorsData={docData} />
		</>
	);
}
