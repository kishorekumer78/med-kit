import { ReactNode } from 'react';
import { Navbar } from '@/components/frontEnd/Navbar';
import { logoDetails, navLinks } from '@/config/data';

export default function FrontLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Navbar logoDetails={logoDetails} navLinks={navLinks} />
			{children}
		</div>
	);
}
