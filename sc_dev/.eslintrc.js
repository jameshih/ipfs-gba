module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:mocha/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  plugins: ['mocha'],
};
