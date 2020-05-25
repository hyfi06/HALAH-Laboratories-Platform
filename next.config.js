const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  include: path.resolve(__dirname, 'src/assets/icons'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
