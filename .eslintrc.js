module.exports = {
  settings: {
    alias: {
      map: [['@', path.resolve(__dirname, 'src')]],
    },
  },

  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@vue/typescript',
    'prettier',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    emcaFeatures: {
      jsx: true,
    },
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
  },
};
