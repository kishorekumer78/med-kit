import { SectionHeading } from '@/components/common/SectionHeading';
import { TabItems } from './TabItems';

export function TabbedSection() {
	return (
		<section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] bg-teal-100">
			<div className="max-w-6xl mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
							<SectionHeading title="Top-rated online doctors & specialists available now" />
							<p className="text-base  dark:text-dark-6">
								Choose from thousands of providers everyday affordable prices. Book
								online today.
							</p>
						</div>
					</div>
				</div>

				{/* Tabbed section */}
				<TabItems />
			</div>
		</section>
	);
}
