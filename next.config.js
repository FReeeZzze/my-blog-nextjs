const withPlugins = require('next-compose-plugins');
const fonts = require('next-fonts');
const path = require('path');

const nextConfig = {
  crossOrigin: 'anonymous',
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    isProduction: process.env.NODE_ENV === 'production',
    apiSite: 'https://jsonplaceholder.typicode.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(path.resolve('./'));
    config.resolve.modules.push(path.resolve('./src/'));
    return config;
  },
};
module.exports = withPlugins([fonts], nextConfig);
