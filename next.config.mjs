/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "accurate-cricket-670.convex.cloud"}
        ], // Add the domain of the external image
      },
};

export default nextConfig;
