// import type { NextConfig } from "next";

import { hostname } from "os";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const NextConfig: NextConfig= {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//       },
//     ],
//   },
// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.pexels.com"], // Add the domain here
    remotePatterns: [{hostname:}]
  },
};

module.exports = nextConfig;