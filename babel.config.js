const path = require('path');

const alias = {
  shared: path.join(__dirname, 'shared')
};

module.exports = {
  presets: [
    'next/babel',        // Let Next.js manage preset-env
    '@babel/preset-flow' // Strip Flow types
  ],
  plugins: [
    ['module-resolver', { alias }]
  ]
};
