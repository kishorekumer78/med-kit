'use client';
import {
	// Fragment,
	useState
} from 'react';
import {
	Dialog
	// Disclosure,
	// Popover,
	// Transition
} from '@headlessui/react';
import {
	// ArrowPathIcon,
	Bars3Icon,
	// ChartPieIcon,
	// CursorArrowRaysIcon,
	// FingerPrintIcon,
	// SquaresPlusIcon,
	XMarkIcon
} from '@heroicons/react/24/outline';
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

// const products = [
// 	{
// 		name: 'Analytics',
// 		description: 'Get a better understanding of your traffic',
// 		href: '#',
// 		icon: ChartPieIcon
// 	},
// 	{
// 		name: 'Engagement',
// 		description: 'Speak directly to your customers',
// 		href: '#',
// 		icon: CursorArrowRaysIcon
// 	},
// 	{
// 		name: 'Security',
// 		description: 'Your customers’ data will be safe and secure',
// 		href: '#',
// 		icon: FingerPrintIcon
// 	},
// 	{
// 		name: 'Integrations',
// 		description: 'Connect with third-party tools',
// 		href: '#',
// 		icon: SquaresPlusIcon
// 	},
// 	{
// 		name: 'Automations',
// 		description: 'Build strategic funnels that will convert',
// 		href: '#',
// 		icon: ArrowPathIcon
// 	}
// ];
// const callsToAction = [
// 	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
// 	{ name: 'Contact sales', href: '#', icon: PhoneIcon }
// ];

// function classNames(...classes: string[]) {
// 	return classes.filter(Boolean).join(' ');
// }

type Props = {
	logoDetails: { src: string; companyName: string };
	navLinks: { href: string; label: string }[];
};
export function Navbar({ logoDetails, navLinks }: Props) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-teal-100 border-b border-gray-400/30 fixed top-0 w-full z-50">
			<MaxWidthWrapper>
				<nav className="mx-auto flex items-center justify-between py-4" aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">{logoDetails.companyName}</span>
							<Image
								className="h-8 w-auto"
								src={logoDetails.src}
								alt={`Logo of ${logoDetails.companyName}`}
								width={32}
								height={32}
							/>
						</a>
					</div>
					{/* Mobile menu button*/}
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6 text-gray-800" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navLinks.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="text-sm font-semibold tracking-wider  text-gray-800 hover:bg-teal-700 hover:text-white px-4 py-2 rounded-md"
							>
								{item.label}
							</Link>
						))}
					</div>
					{/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
							Product
							<ChevronDownIcon
								className="h-5 w-5 flex-none text-gray-400"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -left-8 top-full z-40 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="p-4">
									{products.map((item, i) => (
										<div
											key={i}
											className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<item.icon
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													aria-hidden="true"
												/>
											</div>
											<div className="flex-auto">
												<a
													href={item.href}
													className="block font-semibold text-gray-900"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-gray-600">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
								<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
										>
											<item.icon
												className="h-5 w-5 flex-none text-gray-400"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<a href="#" className="text-sm font-semibold leading-6 text-slate-100">
						Features
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-slate-100">
						Marketplace
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-slate-100">
						Company
					</a>
				</Popover.Group> */}
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="/login"
							className="text-sm font-semibold leading-6 text-gray-50 bg-teal-700 hover:bg-teal-800 rounded px-4 py-2 hover:scale-105 duration-300"
						>
							Login <span>&rarr;</span>
						</a>
					</div>
				</nav>
				{/* Mobile menu */}
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							{/* mobile menu logo */}
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">{logoDetails.companyName}</span>
								<Image
									className="h-8 w-auto"
									src={logoDetails.src}
									alt={`Logo of ${logoDetails.companyName}`}
									width={32}
									height={32}
								/>
							</a>
							{/* mobile menu close button */}
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-800"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						{/* mobile menu content */}
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-200">
								<div className="space-y-2 py-6">
									{/* <Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												Product
												<ChevronDownIcon
													className={classNames(
														open ? 'rotate-180' : '',
														'h-5 w-5 flex-none'
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[...products, ...callsToAction].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure> */}

									{navLinks.map((item, i) => (
										<a
											key={i}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold  text-gray-800 hover:bg-gray-800 hover:text-gray-50"
										>
											{item.label}
										</a>
									))}
								</div>
								<div className="py-6">
									<a
										href="/login"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold  text-gray-800 hover:bg-gray-800 hover:text-gray-50"
									>
										Log in <span>&rarr;</span>
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</MaxWidthWrapper>
		</header>
	);
}
