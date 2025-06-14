/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"], // ✅ Add Firebase Storage here
      remotePatterns: [
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
        },
      ],
    },
  };
  
export default nextConfig;
