/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'coding-challenge-api.aerolab.co',
            },
        ],
    },
}

module.exports = nextConfig
