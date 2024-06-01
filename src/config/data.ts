import { Service } from '@/lib/types';

export const navLinks: { href: string; label: string }[] = [
	{ label: 'Features', href: '#' },
	{ label: 'Marketplace', href: '#' },
	{ label: 'Company', href: '#' }
];
export const logoDetails: { src: string; companyName: string } = {
	src: '/logo.svg',
	companyName: 'Med Kit'
};
export const heroTitleTexts = [
	'Specialist  Doctor',
	'Dental',
	'Therapy',
	'Acupuncture Specialist',
	'Occupational Therapy',
	'Diagnostics',
	'X-RAY',
	'Clinical',
	'ENT',
	'Specialized Treatment',
	'Radiology'
];
export const heroText =
	'Health should not be a puzzle.We provide you with safe, transparent and affordable healthcare at your finger-tips with utmost care.';

export const megaMenu = [
	{
		title: 'Top Booked',
		services: [
			{
				title: 'Telehealth',
				slug: 'tele-health',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Video Prescription refill',
				slug: 'video-prescription-refill',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Doctor visit',
				slug: 'doctor-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'UTI consult',
				slug: 'uti-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'ED consult',
				slug: 'ed-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Mental health consult',
				slug: 'mental-health-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Urgent care visit',
				slug: 'urgent-care-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			}
		]
	},
	{
		title: 'Doctors',
		services: [
			{
				title: 'Telehealth',
				slug: 'tele-health',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Video Prescription refill',
				slug: 'video-prescription-refill',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Doctor visit',
				slug: 'doctor-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'UTI consult',
				slug: 'uti-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'ED consult',
				slug: 'ed-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Mental health consult',
				slug: 'mental-health-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Urgent care visit',
				slug: 'urgent-care-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			}
		]
	},
	{
		title: 'Specialties',
		services: [
			{
				title: 'Telehealth',
				slug: 'tele-health',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Video Prescription refill',
				slug: 'video-prescription-refill',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Doctor visit',
				slug: 'doctor-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'UTI consult',
				slug: 'uti-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'ED consult',
				slug: 'ed-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Mental health consult',
				slug: 'mental-health-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Urgent care visit',
				slug: 'urgent-care-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			}
		]
	},
	{
		title: 'Symptoms',
		services: [
			{
				title: 'Telehealth',
				slug: 'tele-health',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Video Prescription refill',
				slug: 'video-prescription-refill',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Doctor visit',
				slug: 'doctor-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'UTI consult',
				slug: 'uti-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'ED consult',
				slug: 'ed-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Mental health consult',
				slug: 'mental-health-consult',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			},
			{
				title: 'Urgent care visit',
				slug: 'urgent-care-visit',
				description:
					'A general description about the service in question. This gives an outline how the service is given in this website.'
			}
		]
	}
];

export const services: Service[] = [
	{
		title: 'Telehealth',
		slug: 'tele-health',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	},
	{
		title: 'ENT Consult',
		slug: 'video-prescription-refill',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	},
	{
		title: 'UTI consult',
		slug: 'uti-consult',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	},
	{
		title: 'ED Consult',
		slug: 'ed-consult',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	},
	{
		title: 'Urgent visit',
		slug: 'urgent-care-visit',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	},
	{
		title: 'Mental health',
		slug: 'mental-health-consult',
		description: '936 doctors available',
		image: '/placeholder_svcs.jpg'
	}
];
export const links = [
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT Name kasdfjjsjfndj', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT BNG', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' },
	{ title: 'ENT', slug: 'ent-specialist' }
];
