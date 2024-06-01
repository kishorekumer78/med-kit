import { ReactNode } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { logoDetails, navLinks } from '@/config/data';
import { MegaMenu } from '@/components/common/MegaMenu';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';

export default function FrontLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="bg-teal-100">
				<Navbar logoDetails={logoDetails} navLinks={navLinks} />
				<MegaMenu />
				<div className="mt-[105px] bg-teal-100 min-h-screen">{children}</div>
			</div>
		</>
	);
}
