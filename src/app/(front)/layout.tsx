import { ReactNode } from 'react';
import { Navbar } from '@/components/frontEnd/Navbar';
import { logoDetails, navLinks } from '@/config/data';
import { MegaMenu } from '@/components/frontEnd/MegaMenu';

export default function FrontLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="bg-blue-950">
				<Navbar logoDetails={logoDetails} navLinks={navLinks} />
				<div className="max-w-7xl mx-auto py-6">
					<div className="container">
						<MegaMenu />
					</div>
				</div>
				{children}
			</div>
		</>
	);
}
