import Image from 'next/image';
import { SearchBar } from '../common/SearchBar';
import { TextTransitions } from '../common/TextTransitions';
import { heroText, heroTitleTexts } from '@/config/data';
import { Pill, Plus, Stethoscope } from 'lucide-react';

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
	return (
		<>
			<a href={href} className="flex w-full items-center justify-center">
				<Image src={imgSrc} alt="brand image" className="h-10 w-full" />
			</a>
		</>
	);
};

export function Hero() {
	return (
		<>
			<section className="bg-blue-950">
				<div className="relative max-w-7xl mx-auto pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
					<div className="container">
						<div className="-mx-4 flex flex-wrap">
							<div className="w-full px-4 lg:w-7/12">
								<div className="hero-content">
									<h1 className="mb-5 text-4xl font-semibold text-gray-50">
										<span className="max-w-prose flex flex-wrap items-center gap-3">
											<span>Book your</span>
											<TextTransitions
												texts={heroTitleTexts}
												className="text-blue-500"
											/>
										</span>
										<span>session now</span>
									</h1>
									<p className="mb-8 max-w-prose text-gray-50">{heroText}</p>
									{/* Search bar */}
									<div className="mb-5">
										<SearchBar
											placeHolder="Search for services, doctors... "
											searchAction={() => () => {}}
										/>
									</div>
									{/* call to action buttons */}
									<ul className="flex flex-wrap items-center gap-3">
										<li>
											<a
												href="/#"
												className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center  font-medium text-gray-50 !bg-blue-700 hover:!bg-blue-800"
											>
												<span className="mr-2">
													<Stethoscope className="h-4 w-4 text-yellow-500" />
												</span>
												Need Doctor Urgently
											</a>
										</li>
										<li>
											<a
												href="/#"
												className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center  font-medium text-gray-50 !bg-blue-700 hover:!bg-blue-800"
											>
												<span className="mr-2">
													<Pill className="h-4 w-4 text-yellow-500" />
												</span>
												Need a prescription refill
											</a>
										</li>
									</ul>
									<div className="py-4 mt-8  flex gap-4">
										<div className="flex flex-col items-center">
											<span className="flex  items-center font-bold text-gray-50 text-xl">
												600
												<Plus className="h-4 w-4 text-yellow-500" />
											</span>
											<span className="text-gray-400">
												Active Specialists
											</span>
										</div>
										<div className="flex flex-col items-center">
											<span className="flex  items-center font-bold text-gray-50 text-xl">
												2300
												<Plus className="h-4 w-4 text-yellow-500" />
											</span>
											<span className="text-gray-400">Active Patients</span>
										</div>
										<div className="flex flex-col items-center">
											<span className="flex  items-center font-bold text-gray-50 text-xl">
												30
												<Plus className="h-4 w-4 text-yellow-500" />
											</span>
											<span className="text-gray-400">Departments</span>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="hidden px-4 lg:block lg:w-1/12"></div> */}
							<div className="w-full px-4 lg:w-5/12">
								<div className="lg:ml-auto lg:text-right">
									<div className="relative z-10 inline-block pt-11 lg:pt-0">
										{/* Hero image */}
										<Image
											src="/hero.jpg"
											alt="doctor hero image"
											width={400}
											height={400}
											className="max-w-full lg:ml-auto rounded-tl-[45%]"
										/>

										<span className="absolute -bottom-8 -left-8 z-[-1]">
											{/* Hero dots */}
											<Image
												src={'/square_dots.svg'}
												alt="dot"
												width={100}
												height={100}
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
