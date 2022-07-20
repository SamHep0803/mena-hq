/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  redirects: async() => {
    return [
      {
        source: "/discord",
        destination: "https://discord.com",
        permanent: true,
        basePath: false
      }
    ]
  }
}

module.exports = nextConfig
