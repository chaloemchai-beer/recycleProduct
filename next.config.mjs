/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'scontent.fbkk22-3.fna.fbcdn.net',
          port: '',
          pathname: '/**',
        },
      ],
  },
};

export default nextConfig;