/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailwindui.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.tailgrids.com'
			}
		]
	}
};

export default nextConfig;
