/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["www.ihop.com", "media.wired.com",'www.ihop.com','s3.us-west-1.amazonaws.com','www.facebook.com']
  }
}

module.exports = nextConfig
