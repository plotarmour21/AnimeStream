/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // Allow images from the MyAnimeList CDN
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
