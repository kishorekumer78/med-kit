'use client';
import Link from 'next/link';

export function FixedFooterBook() {
	return (
		<>
			<div className="fixed bottom-0 w-full rounded-md py-4 shadow-xl bg-gray-100">
				<div className="max-w-4xl mx-auto flex justify-between items-center">
					<div className="text-teal-900">
						<div className="flex flex-col">
							<p className="font-bold tracking-wider line">$56</p>
							<Link href="#" className="text-xs underline hover:no-underline">
								Or $132 with <span className="font-semibold">Med-kit Plus</span>
							</Link>
						</div>
						<div className="pt-2 text-xs">
							<div>
								<p className="font-bold">Sun, Jun 2 - 9:00 AM EDT</p>
								<p className="">You won’t be charged yet</p>
							</div>
							{/* <p className=" font-semibold ">Available today</p> */}
						</div>
					</div>
					<button className="bg-teal-700 text-white font-semibold text-lg px-8 py-4 rounded-md hover:opacity-70 transition-all duration-300">
						Book
					</button>
				</div>
			</div>
		</>
	);
}
