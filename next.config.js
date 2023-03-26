/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/home", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;
