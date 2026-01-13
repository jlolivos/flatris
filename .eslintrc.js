module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // allows parsing without a babelrc
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
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  globals: {
    global: true,
    process: true
  },
  rules: {
    'no-console': 'off',
    'flowtype/generic-spacing': 'off'
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'babel.config.js',
        'jest.config.js',
        'jest.framework-setup.js',
        'web/next.config.js',
        'server/**/*.js'
      ],
      env: {
        node: true
      }
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    },
    {
      files: [
        'web/components/**/*.js',
        'web/pages/**/*.js',
        'web/mocks/**/*.js'
      ],
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
      }
    }
  ]
};
