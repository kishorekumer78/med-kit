import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {
	placeHolder?: string;
	searchAction?: () => {};
};

export function SearchBar({ placeHolder = '', searchAction }: Props) {
	return (
		<>
			<form className="max-w-md mx-auto">
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
					</div>
					<input
						type="search"
						id="default-search"
						name="default-search"
						className="block w-full p-4 ps-10 text-xs text-gray-900 rounded-full bg-white"
						placeholder={placeHolder}
						required
					/>
					<button
						type="submit"
						className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-xs px-4 py-2"
					>
						Search
					</button>
				</div>
			</form>
		</>
	);
}
