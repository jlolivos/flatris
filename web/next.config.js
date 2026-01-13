const path = require('path');

module.exports = {
  eslint: {
    ignoreDuringBuilds: true // optional, skip lint errors during build
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, '../shared')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-flow']
        }
      }
    });
    return config;
  }
};
