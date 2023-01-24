const withOffline = require("next-offline");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}


 
module.exports = withOffline(nextConfig);
 