/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn-community.pressidium.com",
      "th.bing.com",
      // Add any other domains you want to allow
    ],
  },
};

export default nextConfig;
