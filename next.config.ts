import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dich-vu-xe-ghep",
        destination: "/tuyen-lien-tinh",
        permanent: true,
      },
      {
        source: "/bang-gia",
        destination: "/tuyen-lien-tinh",
        permanent: true,
      },
      {
        source: "/taxi-dua-don-san-bay-noi-bai",
        destination: "/tuyen-lien-tinh/hai-phong-ha-noi-noi-bai",
        permanent: true,
      },
      {
        source: "/taxi-duong-dai",
        destination: "/tuyen-lien-tinh",
        permanent: true,
      },
      {
        source: "/dang-ky-doi-tac",
        destination: "/lien-he",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
