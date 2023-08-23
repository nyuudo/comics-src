/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muyocmrtggaomnsberas.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
