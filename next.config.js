/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Re-enabled after fixing hydration issues
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'axuegixbqsvztdraenkz.supabase.co',
                pathname: '/storage/v1/object/public/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'inline',
    },
};

module.exports = nextConfig;

