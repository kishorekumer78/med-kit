import Image from 'next/image';
import { SearchBar } from '../common/SearchBar';

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
				<div className="relative max-w-6xl mx-auto pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
					<div className="container">
						<div className="-mx-4 flex flex-wrap">
							<div className="w-full px-4 lg:w-5/12">
								<div className="hero-content">
									<h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gray-50 sm:text-[42px] lg:text-[40px] xl:text-5xl">
										Your well-being is our prime concern.
									</h1>
									<p className="mb-8 max-w-[480px] text-gray-50">
										Get all in medical facilities, specialized doctors, world
										class lab,pharmacy and best clinical facilities with in your
										reach.
									</p>
									{/* Search bar */}
									<div className="mb-5">
										<SearchBar
											placeHolder="Search for services, doctors... "
											searchAction={() => () => {}}
										/>
									</div>
									{/* call to action buttons */}
									<ul className="flex flex-wrap items-center">
										<li>
											<a
												href="/#"
												className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center  font-medium text-gray-50 hover:bg-blue-800 lg:px-7"
											>
												Get Started
											</a>
										</li>
										<li>
											<a
												href="/#"
												className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-blue-800"
											>
												<span className="mr-2">
													<Image
														src={'/download.svg'}
														height={40}
														width={40}
														alt="dot"
													/>
												</span>
												Download App
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="hidden px-4 lg:block lg:w-1/12"></div>
							<div className="w-full px-4 lg:w-6/12">
								<div className="lg:ml-auto lg:text-right">
									<div className="relative z-10 inline-block pt-11 lg:pt-0">
										{/* Hero image */}
										<Image
											src="/hero.png"
											alt="hero"
											width={450}
											height={400}
											className="max-w-full lg:ml-auto"
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
