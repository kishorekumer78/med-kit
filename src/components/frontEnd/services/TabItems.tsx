'use client';

import { Tabs } from 'flowbite-react';
import { Clipboard, Stethoscope } from 'lucide-react';
import { ServiceList } from './ServiceList';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdMedicalServices } from 'react-icons/md';
import { AtSymbolIcon } from '@heroicons/react/16/solid';
import { links, services } from '@/config/data';
import LinkCards from './LinkCards';

export function TabItems() {
	// TODO: Wrong way to implement became static
	const tabData = [
		{
			title: 'Popular Services',
			icon: MdMedicalServices,
			content: <ServiceList services={services} />
		},
		{ title: 'Doctors', icon: Stethoscope, content: <LinkCards links={links} /> },
		{
			title: 'Specialists',
			icon: FaUserDoctor,
			content: <LinkCards links={links} className="bg-slate-700" />
		},
		{
			title: 'Symptoms',
			icon: AtSymbolIcon,
			content: <LinkCards links={links} className="bg-gray-800" />
		},
		{ title: 'Others', icon: Clipboard, content: 'Nothing to show' }
	];
	return (
		<Tabs aria-label="Tabs with underline" style="underline">
			{tabData.map((item, i) => (
				<Tabs.Item key={i} active title={item.title} icon={item.icon}>
					{item.content}
				</Tabs.Item>
			))}
		</Tabs>
	);
}
