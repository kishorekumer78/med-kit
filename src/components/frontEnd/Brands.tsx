import Image from 'next/image';
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';

const brandsData = [
	{
		imageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg',
		lightImageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg',
		altText: 'graygrids',
		link: '#'
	},
	{
		imageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg',
		lightImageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg',
		altText: 'lineicons',
		link: '#'
	},
	{
		imageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg',
		lightImageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg',
		altText: 'uideck',
		link: '#'
	},
	{
		imageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg',
		lightImageSrc: 'https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg',
		altText: 'ayroui',
		link: '#'
	}
];

export function Brands() {
	return (
		<section className="bg-gray-100 py-4 dark:bg-dark">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center">Trusted by</h2>
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="flex flex-wrap items-center justify-center">
							{brandsData.map((brand, i) => (
								<SingleImage key={i} brand={brand} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const SingleImage = ({
	brand
}: {
	brand: { link: string; imageSrc: string; lightImageSrc: string; altText: string };
}) => {
	const { link, imageSrc, lightImageSrc, altText } = brand;
	return (
		<>
			<a
				href={link}
				className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
			>
				<Image
					src={imageSrc}
					alt={altText}
					height={32}
					width={32}
					className="h-10 w-full dark:hidden"
				/>
				<Image
					src={lightImageSrc}
					height={32}
					width={32}
					alt={altText}
					className="hidden h-10 w-full dark:block"
				/>
			</a>
		</>
	);
};
