module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    semi: 0,
    'no-multiple-empty-lines': 0,
    indent: 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
  },
}

