// next.config.js
module.exports = {
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
  swcMinify: true,
  images: {
    domains: [
      "yt3.ggpht.com",
      "www.courseduck.com",
      "i1.sndcdn.com",
      "gammas.org",
    ],
    formats: ["image/avif"],
  },
};
