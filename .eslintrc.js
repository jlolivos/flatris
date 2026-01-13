module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-flow']
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:flowtype/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react', 'flowtype'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'no-console': 'off',
    'flowtype/generic-spacing': 'off'
  }
};
