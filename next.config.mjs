/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image allow all domains
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;
